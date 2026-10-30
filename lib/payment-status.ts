export const PAYMENT_STATUSES = [
    "processing",
    "success",
    "failed",
    "cancelled",
] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export function parsePaymentStatus(
    v: string | string[] | undefined
): PaymentStatus | undefined {
    const value = Array.isArray(v) ? v[0] : v;
    return PAYMENT_STATUSES.find((s) => s === value);
}