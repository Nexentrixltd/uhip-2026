import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RegisterFlow from "@/components/register/RegisterFlow";
import PaymentStates from "@/components/register/PaymentStates";
import { parsePaymentStatus } from "@/lib/payment-status";

export const metadata: Metadata = {
  title: "Register · UHIP 2026",
  description:
    "Choose your ticket, enter attendee details and pay securely with Paystack.",
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string | string[] }>;
}) {
  const { status } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Register · Buy ticket"
        title="Secure your place at UHIP 2026"
        description="Choose your ticket, enter attendee details and pay securely with Paystack."
      />
      <RegisterFlow paymentStatus={parsePaymentStatus(status)} />
      <PaymentStates />
    </>
  );
}