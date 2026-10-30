import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import EventInfoCard from "@/components/contact/EventInfoCard";

export const metadata: Metadata = {
    title: "Contact · UHIP 2026",
    description:
        "Reach the Afmaaj Consulting team about tickets, investment, exhibition and partnership opportunities.",
};

export default function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="Contact Afmaaj"
                eyebrowStyle="pill"
                title="Questions about UHIP 2026?"
                description="Reach the Afmaaj Consulting team about tickets, investment, exhibition and partnership opportunities."
            />

            <ContactCards />

            <section className="bg-warm-white">
                <div className="mx-auto w-full max-w-360 px-6 py-16 md:px-16 md:py-24">
                    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
                        <div className="rounded-3xl border border-border bg-white p-6 sm:p-10">
                            <ContactForm />
                        </div>
                        <EventInfoCard />
                    </div>
                </div>
            </section>
        </>
    );
}