import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

function calcTimeLeft(target) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ targetDate, label }) {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  const blocks = [
    { value: timeLeft.days, unit: "Días" },
    { value: timeLeft.hours, unit: "Horas" },
    { value: timeLeft.minutes, unit: "Min" },
    { value: timeLeft.seconds, unit: "Seg" },
  ];

  return (
    <div className="mt-8">
      {label && (
        <div className="flex items-center gap-2 mb-3">
          <Timer className="w-4 h-4 text-fuego" />
          <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
            {label}
          </span>
        </div>
      )}
      <div className="flex gap-2 sm:gap-3">
        {blocks.map(({ value, unit }) => (
          <div
            key={unit}
            className="flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[64px]"
          >
            <span className="text-xl sm:text-2xl font-extrabold text-oro tabular-nums">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider mt-0.5">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
