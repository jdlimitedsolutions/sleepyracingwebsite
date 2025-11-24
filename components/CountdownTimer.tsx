"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsLaunched(true);
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isLaunched) {
    return null;
  }

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center section-container">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-widest mb-8 text-sleepy-red italic">
          SLEEPY
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold tracking-wider mb-4 text-sleepy-neonGreen">
          FIRST DROP
        </h2>

        <p className="text-xl md:text-2xl text-neutral-400 mb-16 tracking-wide">
          New Year. New Collection. Built different.
        </p>

        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12">
          {[
            { value: timeLeft.days, label: "DAYS" },
            { value: timeLeft.hours, label: "HRS" },
            { value: timeLeft.minutes, label: "MIN" },
            { value: timeLeft.seconds, label: "SEC" },
          ].map((item) => (
            <div key={item.label} className="glossy-card p-6 md:p-8">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-neutral-500 tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="glossy-card p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4 tracking-wider">UNDERCOVER. OVERPOWERED.</h3>
          <p className="text-neutral-400 leading-relaxed">
            Custom apparel for the sleeper car culture. Performance first. Hidden power.
            Underground heritage. The wait is almost over.
          </p>
        </div>
      </div>
    </div>
  );
}
