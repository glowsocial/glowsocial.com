import { NextResponse } from "next/server";

/**
 * POST /api/setup-lead
 * Captures email + website from the /setup landing page.
 *
 * For now: logs the lead and returns success.
 * TODO: Send to Mailchimp / Resend / your CRM of choice.
 */
export async function POST(request) {
  try {
    const { email, website } = await request.json();

    if (!email || !website) {
      return NextResponse.json(
        { error: "Email and website are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Basic URL validation
    try {
      new URL(website);
    } catch {
      return NextResponse.json(
        { error: "Please enter a valid website URL (include https://)" },
        { status: 400 }
      );
    }

    // Log the lead (visible in Vercel function logs)
    console.log("[SETUP-LEAD]", {
      email,
      website,
      timestamp: new Date().toISOString(),
      source: "glowsocial.com/setup",
    });

    // TODO: Integrate with your email service
    // Options:
    // - Mailchimp: Add to list + tag "setup-lead"
    // - Resend: Send the profile kit email
    // - Supabase: Store in a leads table
    // - All of the above

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[SETUP-LEAD] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
