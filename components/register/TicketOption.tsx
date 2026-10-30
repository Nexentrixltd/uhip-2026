import { formatNaira, Ticket } from "@/lib/register";

type Props = {
    ticket: Ticket;
    selected: boolean;
    onSelect: (id: string) => void;
};

export default function TicketOption({ ticket, selected, onSelect }: Props) {
    return (
        <label
            className={`flex cursor-pointer items-start gap-4 rounded-3xl border p-5 transition has-focus-visible:ring-2 has-focus-visible:ring-gold-600 sm:items-center sm:p-6 ${selected
                ? "border-brown-600 bg-sage-50 ring-1 ring-brown-600"
                : "border-border bg-white hover:border-brown-600/40"
                }`}
        >
            <input
                type="radio"
                name="ticket"
                value={ticket.id}
                checked={selected}
                onChange={() => onSelect(ticket.id)}
                className="sr-only"
            />

            <span
                aria-hidden
                className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 sm:mt-0 ${selected ? "border-brown-600" : "border-brown-600/60"
                    }`}
            >
                {selected && <span className="h-3 w-3 rounded-full bg-brown-600" />}
            </span>

            <span className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                        <span className="text-xl font-bold text-brown-900">{ticket.name}</span>
                        {selected && (
                            <span className="rounded-full bg-brown-900 px-2.5 py-0.5 text-xs font-semibold text-white">
                                ✓ Selected
                            </span>
                        )}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-brown-600">
                        {ticket.date} · {ticket.note}
                    </span>
                    <span className="mt-2 block text-sm text-muted-text">
                        {ticket.description}
                    </span>
                </span>

                <span className="flex shrink-0 items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-3">
                    <span className="text-xl font-extrabold text-brown-900">
                        {formatNaira(ticket.price)}
                    </span>
                    <span
                        className={`rounded-lg border border-brown-900 px-5 py-2 text-sm font-semibold ${selected ? "bg-brown-900 text-white" : "bg-white text-brown-900"
                            }`}
                    >
                        {selected ? "Selected" : "Select Ticket"}
                    </span>
                </span>
            </span>
        </label>
    );
}