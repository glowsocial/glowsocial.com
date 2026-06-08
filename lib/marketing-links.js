const APP_BASE_URL = "https://app.glowsocial.com";
const MARKETING_SOURCE = "glowsocial.com";

export function appMarketingUrl(path, params = {}) {
  const url = new URL(path, APP_BASE_URL);

  Object.entries({
    utm_source: MARKETING_SOURCE,
    ...params,
  }).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

export function previewUrl(utmMedium, utmContent) {
  return appMarketingUrl("/preview", {
    utm_medium: utmMedium,
    utm_campaign: "free_preview",
    utm_content: utmContent,
  });
}

export function checkoutUrl(plan, utmMedium, utmContent = plan) {
  return appMarketingUrl("/checkout", {
    plan,
    utm_medium: utmMedium,
    utm_campaign: "pricing_cta",
    utm_content: utmContent,
  });
}

export function previewAttribution(utmMedium, utmContent) {
  return {
    utm_source: MARKETING_SOURCE,
    utm_medium: utmMedium,
    utm_campaign: "free_preview",
    utm_content: utmContent,
  };
}
