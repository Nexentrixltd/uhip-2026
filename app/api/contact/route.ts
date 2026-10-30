import { NextResponse } from "next/server";
import { validateEnquiry, type Enquiry } from "@/lib/contact";

export const runtime = "nodejs";

const str = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (str(body.website) !== "") return NextResponse.json({ ok: true });

  const enquiry: Enquiry = {
    fullName: str(body.fullName, 120),
    email: str(body.email, 200),
    phone: str(body.phone, 40),
    organisation: str(body.organisation, 200),
    interest: str(body.interest, 30),
    message: str(body.message),
  };

  const fieldErrors = validateEnquiry(enquiry, body.agreed === true);
  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { error: "Validation failed", fieldErrors },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.log(
        "[contact] Email isn’t configured. Enquiry received:",
        enquiry,
      );
      return NextResponse.json({ ok: true });
    }
    console.error(
      "[contact] RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing",
    );
    return NextResponse.json(
      { error: "Email isn’t configured" },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${enquiry.fullName}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "-"}`,
    `Organisation: ${enquiry.organisation || "-"}`,
    `Interested in: ${enquiry.interest}`,
    "",
    enquiry.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: enquiry.email,
      subject: `UHIP 2026 enquiry: ${enquiry.interest}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error(
      "[contact] Resend error",
      res.status,
      await res.text().catch(() => ""),
    );
    return NextResponse.json(
      { error: "Could not send the enquiry" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
