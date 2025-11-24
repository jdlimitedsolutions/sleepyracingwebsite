"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="max-w-4xl w-full text-center px-4">
        {/* Coming Soon Header */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-2" style={{ color: '#FF0000' }}>
            COMING
            <br />
            SOON
          </h1>
          <div className="w-32 h-1 mx-auto" style={{ backgroundColor: '#39FF14' }}></div>
        </div>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-wider mb-2 text-white">
          NEW YEAR. NEW DROP.
        </h2>
        <p className="text-neutral-400 mb-12">
          First collection drops January 1st, 2026.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 md:gap-6 mb-16">
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-bold mb-2" style={{ color: '#39FF14' }}>
              {timeLeft.days}
            </div>
            <div className="text-xs md:text-sm text-neutral-400 tracking-wider">DAYS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-bold mb-2" style={{ color: '#00BFFF' }}>
              {timeLeft.hours}
            </div>
            <div className="text-xs md:text-sm text-neutral-400 tracking-wider">HOURS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-bold mb-2" style={{ color: '#FF0000' }}>
              {timeLeft.minutes}
            </div>
            <div className="text-xs md:text-sm text-neutral-400 tracking-wider">MINUTES</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-7xl font-bold mb-2" style={{ color: '#FF0000' }}>
              {timeLeft.seconds}
            </div>
            <div className="text-xs md:text-sm text-neutral-400 tracking-wider">SECONDS</div>
          </div>
        </div>

        {/* The First Drop */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-8 text-white">
            THE FIRST DROP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#39FF14' }}>5</div>
              <div className="text-lg font-bold mb-2">Products</div>
              <div className="text-sm text-neutral-400">
                Hoodies, tees, crewneck, beanie, hat/trucker.
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#00BFFF' }}>9</div>
              <div className="text-lg font-bold mb-2">Color Options</div>
              <div className="text-sm text-neutral-400">
                Full customization on every build.
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2" style={{ color: '#FF0000' }}>5</div>
              <div className="text-lg font-bold mb-2">Logo Variations</div>
              <div className="text-sm text-neutral-400">
                Make it yours.
              </div>
            </div>
          </div>
        </div>

        {/* Stay Updated */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-4 text-white">
            STAY UPDATED
          </h3>
          <p className="text-neutral-400 mb-6">
            Follow us on social for drop updates, previews, and exclusive content.
          </p>
          <Link
            href="/social"
            className="inline-block px-8 py-3 font-bold tracking-wider transition-all"
            style={{ backgroundColor: '#FF0000', color: 'white' }}
          >
            FOLLOW US
          </Link>
        </div>

        {/* Footer */}
        <p className="text-xs text-neutral-500 mt-8">
          Real builds only. Built different.
        </p>
      </div>
    </div>
  );
}
