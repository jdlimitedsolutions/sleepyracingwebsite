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

  // Force video to loop
  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    }
  }, []);

  if (isLaunched) {
    return null;
  }

  if (!timeLeft) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-8 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.37)', zIndex: 0 }}
      >
        <source src="/videos/racing-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/50" style={{ zIndex: 1 }}></div>

      <div className="max-w-4xl w-full text-center px-4 relative" style={{ zIndex: 20 }}>
        {/* Coming Soon Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-5xl md:text-8xl font-bold tracking-wider mb-3 leading-tight" style={{ color: '#FF0000' }}>
            COMING
            <br />
            SOON
          </h1>
          <div className="w-24 md:w-32 h-1 mx-auto" style={{ backgroundColor: '#39FF14' }}></div>
        </div>

        {/* Subheading */}
        <h2 className="text-xl md:text-3xl font-bold tracking-wider mb-2 text-white">
          NEW YEAR. NEW DROP.
        </h2>
        <p className="text-sm md:text-base text-neutral-400 mb-8 md:mb-12">
          First collection drops January 1st, 2026.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 md:gap-6 mb-12 md:mb-16">
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl md:text-7xl font-bold mb-1 md:mb-2" style={{ color: '#39FF14' }}>
              {timeLeft.days}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-neutral-400 tracking-wider">DAYS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl md:text-7xl font-bold mb-1 md:mb-2" style={{ color: '#00BFFF' }}>
              {timeLeft.hours}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-neutral-400 tracking-wider">HOURS</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl md:text-7xl font-bold mb-1 md:mb-2" style={{ color: '#FF0000' }}>
              {timeLeft.minutes}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-neutral-400 tracking-wider">MINUTES</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl md:text-7xl font-bold mb-1 md:mb-2" style={{ color: '#FF0000' }}>
              {timeLeft.seconds}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-neutral-400 tracking-wider">SECONDS</div>
          </div>
        </div>

        {/* The First Drop */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-3xl font-bold tracking-wider mb-6 md:mb-8 text-white">
            THE FIRST DROP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#39FF14' }}>5</div>
              <div className="text-base md:text-lg font-bold mb-1 md:mb-2">Products</div>
              <div className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                Hoodies, tees, crewneck, beanie, hat/trucker.
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#00BFFF' }}>9</div>
              <div className="text-base md:text-lg font-bold mb-1 md:mb-2">Color Options</div>
              <div className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                Full customization on every build.
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#FF0000' }}>5</div>
              <div className="text-base md:text-lg font-bold mb-1 md:mb-2">Logo Variations</div>
              <div className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                Make it yours.
              </div>
            </div>
          </div>
        </div>

        {/* Stay Updated */}
        <div className="mb-8">
          <h3 className="text-xl md:text-3xl font-bold tracking-wider mb-3 md:mb-4 text-white">
            STAY UPDATED
          </h3>
          <p className="text-sm md:text-base text-neutral-400 mb-6 leading-relaxed">
            Follow us on social for drop updates, previews, and exclusive content.
          </p>
          <Link
            href="/social"
            className="inline-block px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-bold tracking-wider transition-all"
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
