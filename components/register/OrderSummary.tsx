import { formatNaira, MAX_QUANTITY, Ticket } from "@/lib/register";

type Props = {
    ticket: Ticket;
    quantity: number;
    onQuantityChange: (q: number) => void;
    total: number | null;
    paying: boolean;
    error: string | null;
    onProceed: () => void;
};

export default function OrderSummary({
    ticket,
    quantity,
    onQuantityChange,
    total,
    paying,
    error,
    onProceed,
}: Props) {
    return (
        <aside
            aria-label="Order summary"
            className="rounded-3xl border font-sans border-border bg-white p-6 shadow-[0_8px_30px_rgba(44,34,25,0.08)] sm:p-8 lg:sticky lg:top-24"
        >
            <h2 className="text-2xl font-bold text-brown-900">Order summary</h2>

            <dl className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                    <dt className="text-muted-text">Ticket</dt>
                    <dd className="text-right font-semibold text-brown-900">{ticket.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                    <dt className="text-muted-text">Date</dt>
                    <dd className="text-right font-semibold text-brown-900">{ticket.date}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-text">Quantity</dt>
                    <dd>
                        <div className="inline-flex items-center rounded-xl border border-border">
                            <button
                                type="button"
                                aria-label="Decrease quantity"
                                disabled={quantity <= 1}
                                onClick={() => onQuantityChange(quantity - 1)}
                                className="h-10 w-10 text-lg font-semibold text-brown-900 disabled:opacity-40"
                            >
                                −
                            </button>
                            <span
                                aria-live="polite"
                                className="w-10 text-center font-semibold text-brown-900"
                            >
                                {quantity}
                            </span>
                            <button
                                type="button"
                                aria-label="Increase quantity"
                                disabled={quantity >= MAX_QUANTITY}
                                onClick={() => onQuantityChange(quantity + 1)}
                                className="h-10 w-10 text-lg font-semibold text-brown-900 disabled:opacity-40"
                            >
                                +
                            </button>
                        </div>
                    </dd>
                </div>
            </dl>

            <div className="my-5 border-t border-border" />

            <dl className="space-y-3">
                <div className="flex justify-between text-sm">
                    <dt className="text-muted-text">Subtotal</dt>
                    <dd className="font-bold text-brown-900">{formatNaira(total)}</dd>
                </div>
                <div className="flex items-center justify-between">
                    <dt className="text-base font-bold text-brown-900">Total</dt>
                    <dd className="text-xl font-extrabold text-brown-900">
                        {formatNaira(total)}
                    </dd>
                </div>
            </dl>

            <button
                type="button"
                onClick={onProceed}
                disabled={paying}
                className="mt-6 w-full rounded-xl bg-gold-600 px-4 py-4 text-sm font-bold text-brown-900 transition hover:brightness-95 disabled:opacity-60"
            >
                {paying ? "Preparing payment…" : "Proceed to Paystack Payment →"}
            </button>

            {error && (
                <p role="alert" className="mt-3 text-center text-xs text-danger">
                    {error}
                </p>
            )}

            <p className="mt-4 text-center text-xs text-brown-900">
                Secure payment powered by Paystack
            </p>
            <p className="mt-3 text-xs text-muted-text">
                You will be redirected to Paystack to complete payment. Your registration
                is confirmed only after successful payment.
            </p>
        </aside>
    );
}