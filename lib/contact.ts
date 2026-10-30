export const INTERESTS = ["Attend", "Invest", "Exhibit", "Partner"] as const;

export type Enquiry = {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  interest: string;
  message: string;
};

export type EnquiryErrors = Partial<Record<keyof Enquiry | "agreed", string>>;

export const MAX_MESSAGE_LENGTH = 2000;

export function validateEnquiry(e: Enquiry, agreed: boolean): EnquiryErrors {
  const err: EnquiryErrors = {};

  if (e.fullName.trim().length < 2) err.fullName = "Enter your full name";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim()))
    err.email = "Enter a valid email address";

  if (e.phone.trim() && e.phone.replace(/\D/g, "").length < 7)
    err.phone = "Enter a valid phone number";

  if (!(INTERESTS as readonly string[]).includes(e.interest))
    err.interest = "Choose what you’re interested in";

  if (e.message.trim().length < 10)
    err.message = "Tell us a little more (at least 10 characters)";
  else if (e.message.length > MAX_MESSAGE_LENGTH)
    err.message = `Please keep your message under ${MAX_MESSAGE_LENGTH} characters`;

  if (!agreed) err.agreed = "Please agree to be contacted to continue";

  return err;
}
