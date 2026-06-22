import { NextResponse } from "next/server";
import { upsertSubscriber, addTag } from "@/lib/kit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DROPS_TAGS = ["drops"];

export async function POST(request) {
  try {
    const { email } = await request.json();
    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedEmail || !EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const upsertResult = await upsertSubscriber(normalizedEmail, {
      source: "drops-library",
    });

    if (!upsertResult.success) {
      return NextResponse.json(
        { error: upsertResult.error || "Could not save your signup" },
        { status: 500 }
      );
    }

    const tagResults = await Promise.all(
      DROPS_TAGS.map((tag) => addTag(normalizedEmail, tag))
    );

    const tagFailure = tagResults.find((result) => !result.success);
    if (tagFailure) {
      return NextResponse.json(
        { error: tagFailure.error || "Could not finish your signup" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You’re in. Future Drops will come to your inbox.",
    });
  } catch (error) {
    console.error("[DROPS-SUBSCRIBE] Error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
