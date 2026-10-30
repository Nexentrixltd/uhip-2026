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
        <div className="w-full flex flex-col items-center justify-center p-16">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brown-600">
                {time?.done ? "The event has started" : label}
            </p>

            <div
                role="timer"
                aria-live="off"
                className="grid max-w-3xl grid-cols-4 gap-3 sm:gap-5"
            >
                {units.map((u) => (
                    <div
                        key={u.label}
                        className="rounded-2xl font-display bg-brown-900 text-center px-8 py-3 flex items-center gap-3 justify-center flex-col text-gold-600"
                    >
                        <div className="text-4xl font-medium leading-none tabular-nums sm:text-6xl">
                            {u.value === undefined ? "--" : pad(u.value)}
                        </div>
                        <div className="text-xs text-white font-semibold">
                            {u.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}