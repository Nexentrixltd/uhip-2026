"use client";

import { useEffect, useState } from "react";
const DEFAULT_TARGET = "2026-11-23T09:00:00+01:00";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    done: boolean;
};

function getTimeLeft(targetMs: number, nowMs: number): TimeLeft {
    const diff = Math.max(0, targetMs - nowMs);
    const total = Math.floor(diff / 1000);
    return {
        days: Math.floor(total / 86400),
        hours: Math.floor((total % 86400) / 3600),
        minutes: Math.floor((total % 3600) / 60),
        seconds: total % 60,
        done: diff === 0,
    };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({
    target = DEFAULT_TARGET,
    label = "Event starts in",
}: {
    target?: string;
    label?: string;
}) {
    const [time, setTime] = useState<TimeLeft | null>(null);

    useEffect(() => {
        const targetMs = new Date(target).getTime();
        let timer: ReturnType<typeof setTimeout>;
        let cancelled = false;
        let offset = 0;

        const now = () => Date.now() + offset;

        const tick = () => {
            if (cancelled) return;
            const t = getTimeLeft(targetMs, now());
            setTime(t);
            if (!t.done) {
                timer = setTimeout(tick, 1000 - (now() % 1000));
            }
        };

        const sync = async () => {
            try {
                const sent = Date.now();
                const res = await fetch("/api/time", { cache: "no-store" });
                const { now: serverNow } = await res.json();
                const received = Date.now();
                offset = serverNow - (sent + received) / 2;
            } catch {
            }
        };

        tick();
        sync().then(() => {
            clearTimeout(timer);
            tick();
        });

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, [target]);

    const units = [
        { label: "Days", value: time?.days },
        { label: "Hours", value: time?.hours },
        { label: "Minutes", value: time?.minutes },
        { label: "Seconds", value: time?.seconds },
    ];

    return (
        <section className="w-full px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center">

                <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-brown-600 sm:mb-8 sm:text-xs">
                    {time?.done ? "The event has started" : label}
                </p>

                <div
                    role="timer"
                    aria-live="off"
                    className="grid w-full grid-cols-4 gap-2 sm:gap-4 md:gap-5"
                >
                    {units.map((u) => (
                        <div
                            key={u.label}
                            className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-xl bg-brown-900 px-1 py-4 text-center font-display text-gold-600 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-6 md:py-8"
                        >
                            <div className="text-2xl font-medium leading-none tabular-nums sm:text-4xl md:text-5xl lg:text-6xl">
                                {u.value === undefined ? "--" : pad(u.value)}
                            </div>

                            <div className="text-[9px] font-semibold text-white sm:text-xs">
                                {u.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}