const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_BASE_URL = "https://api.kit.com/v4";

function hasCredentials() {
  return Boolean(KIT_API_KEY);
}

async function kitRequest(method, endpoint, body = null) {
  if (!hasCredentials()) {
    return { success: false, error: "KIT_API_KEY is not configured" };
  }

  try {
    const options = {
      method,
      headers: {
        "X-Kit-Api-Key": KIT_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    if (body && ["POST", "PUT", "PATCH"].includes(method)) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${KIT_BASE_URL}${endpoint}`, options);
    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await response.json()
      : null;

    if (!response.ok) {
      const errorMessage =
        data?.errors?.[0]?.message || data?.message || response.statusText;
      return { success: false, error: errorMessage };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function findSubscriber(email) {
  const result = await kitRequest(
    "GET",
    `/subscribers?email_address=${encodeURIComponent(email)}`
  );

  if (result.success && result.data?.subscribers?.length > 0) {
    return { success: true, subscriber: result.data.subscribers[0] };
  }

  return { success: true, subscriber: null };
}

export async function upsertSubscriber(email, properties = {}) {
  if (!email) {
    return { success: false, error: "Email is required" };
  }

  const existing = await findSubscriber(email);

  const subscriberData = {
    email_address: email,
    first_name: properties.firstName || properties.first_name || undefined,
    fields: {},
  };

  const fieldMappings = {
    company_name: "company-name",
    website: "website",
    source: "source",
  };

  for (const [propKey, fieldKey] of Object.entries(fieldMappings)) {
    if (properties[propKey] !== undefined) {
      subscriberData.fields[fieldKey] = properties[propKey];
    }
  }

  if (Object.keys(subscriberData.fields).length === 0) {
    delete subscriberData.fields;
  }

  Object.keys(subscriberData).forEach((key) => {
    if (subscriberData[key] === undefined) {
      delete subscriberData[key];
    }
  });

  if (existing.subscriber) {
    return kitRequest("PUT", `/subscribers/${existing.subscriber.id}`, subscriberData);
  }

  return kitRequest("POST", "/subscribers", subscriberData);
}

let tagsCache = {
  tags: [],
  timestamp: 0,
};

const CACHE_TTL_MS = 5 * 60 * 1000;

async function findTagByName(tagName) {
  const now = Date.now();

  if (tagsCache.tags.length > 0 && now - tagsCache.timestamp < CACHE_TTL_MS) {
    const normalizedName = tagName.toLowerCase();
    return tagsCache.tags.find((tag) => tag.name.toLowerCase() === normalizedName) || null;
  }

  let cursor = null;
  let allTags = [];

  do {
    const endpoint = cursor ? `/tags?after=${cursor}` : "/tags";
    const result = await kitRequest("GET", endpoint);

    if (!result.success || !result.data?.tags) {
      break;
    }

    allTags = allTags.concat(result.data.tags);
    const hasNext = result.data?.pagination?.has_next_page;
    cursor = hasNext ? result.data.pagination.end_cursor : null;
  } while (cursor);

  if (allTags.length > 0) {
    tagsCache = {
      tags: allTags,
      timestamp: Date.now(),
    };
  }

  const normalizedName = tagName.toLowerCase();
  return allTags.find((tag) => tag.name.toLowerCase() === normalizedName) || null;
}

export async function addTag(email, tagName) {
  if (!email || !tagName) {
    return { success: false, error: "Email and tag name are required" };
  }

  let tag = await findTagByName(tagName);
  let tagId = tag?.id;

  if (!tagId) {
    const createResult = await kitRequest("POST", "/tags", { name: tagName });
    if (!createResult.success) {
      return createResult;
    }
    tagId = createResult.data?.tag?.id;
    tag = createResult.data?.tag || null;
  }

  if (!tagId) {
    return { success: false, error: "Could not find or create tag" };
  }

  if (tag) {
    tagsCache = {
      tags: [...tagsCache.tags.filter((cachedTag) => cachedTag.id !== tag.id), tag],
      timestamp: Date.now(),
    };
  }

  return kitRequest("POST", `/tags/${tagId}/subscribers`, {
    email_address: email,
  });
}

const kit = {
  upsertSubscriber,
  addTag,
};

export default kit;
