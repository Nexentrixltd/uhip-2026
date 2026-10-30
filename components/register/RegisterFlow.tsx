"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PaymentStatus } from "@/lib/payment-status";
import Stepper from "./Stepper";
import TicketOption from "./TicketOption";
import AttendeeForm, { validateAttendee, type Attendee } from "./AttendeeForm";
import OrderSummary from "./OrderSummary";
import { TICKETS } from "@/lib/register";

const EMPTY: Attendee = { fullName: "", email: "", phone: "", organisation: "" };

export default function RegisterFlow({
    paymentStatus,
}: {
    paymentStatus?: PaymentStatus;
}) {
    const [ticketId, setTicketId] = useState(TICKETS[0].id);
    const [ticketChosen, setTicketChosen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [attendee, setAttendee] = useState<Attendee>(EMPTY);
    const [agreed, setAgreed] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [paying, setPaying] = useState(false);
    const [checkoutError, setCheckoutError] = useState<string | null>(null);

    const ticket = TICKETS.find((t) => t.id === ticketId) ?? TICKETS[0];
    const total = ticket.price === null ? null : ticket.price * quantity;

    const errors = useMemo(() => validateAttendee(attendee, agreed), [attendee, agreed]);
    const isValid = Object.keys(errors).length === 0;
    const touched = Object.values(attendee).some((v) => v.trim() !== "");

    const currentStep = paymentStatus === "success"
        ? 6
        : paymentStatus || paying
            ? 4
            : isValid
                ? 3
                : touched || ticketChosen
                    ? 2
                    : 1;

    function selectTicket(id: string) {
        setTicketId(id);
        setTicketChosen(true);
    }

    function changeQuantity(q: number) {
        setQuantity(q);
        setTicketChosen(true);
    }

    async function handleProceed() {
        setSubmitted(true);
        setCheckoutError(null);

        if (!isValid) {
            document
                .getElementById("attendee-details")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        setPaying(true);
        try {
            // TODO: connect Paystack.
            await new Promise((resolve) => setTimeout(resolve, 600));
            setCheckoutError("Payment isn’t connected yet. Ticket prices are still to be confirmed.");
        } finally {
            setPaying(false);
        }
    }

    return (
        <>
            <Stepper current={currentStep} />

            <section
                id="checkout"
                className="mx-auto w-full max-w-360 scroll-mt-20 px-6 py-12 font-sans md:px-16 md:py-16"
            >
                <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12">
                    <div className="space-y-12">
                        <div>
                            <h2 id="choose-ticket" className="text-3xl font-bold text-brown-900">
                                1. Choose your ticket
                            </h2>

                            <div role="radiogroup" aria-labelledby="choose-ticket" className="mt-6 space-y-5">
                                {TICKETS.map((t) => (
                                    <TicketOption
                                        key={t.id}
                                        ticket={t}
                                        selected={t.id === ticketId}
                                        onSelect={selectTicket}
                                    />
                                ))}
                            </div>

                            <p className="mt-6 text-sm text-muted-text">
                                Training for your whole organisation?{" "}
                                <Link href="/contact" className="font-bold text-brown-600 hover:underline">
                                    Request a CEP programme →
                                </Link>
                            </p>
                        </div>

                        <AttendeeForm
                            values={attendee}
                            onChange={setAttendee}
                            agreed={agreed}
                            onAgreeChange={setAgreed}
                            errors={errors}
                            showErrors={submitted}
                        />
                    </div>

                    <OrderSummary
                        ticket={ticket}
                        quantity={quantity}
                        onQuantityChange={changeQuantity}
                        total={total}
                        paying={paying}
                        error={checkoutError}
                        onProceed={handleProceed}
                    />
                </div>
            </section>
        </>
    );
}