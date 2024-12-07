"use client";
import { inter, poppins } from "@/app/fonts";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // Target date in ISO format
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;
      setTimeLeft(Math.max(0, difference)); // Prevent negative values
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  // Calculate time units
  const totalSeconds = Math.floor(timeLeft / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const displayDays = totalDays.toString().padStart(2, "0");
  const displayHours = (totalHours % 24).toString().padStart(2, "0");
  const displayMinutes = (totalMinutes % 60).toString().padStart(2, "0");
  const displaySeconds = (totalSeconds % 60).toString().padStart(2, "0");

  return (
    <div
      className={`flex justify-center items-center font-bold text-3xl gap-6`}
    >
      <span className="text-text2">
        <div className={`${poppins.className} font-medium text-xs`}>Days</div>
        <div className={`${inter.className}`}>{displayDays}</div>
      </span>
      <span className={`text-hoverButton`}>:</span>
      <span className="text-text2">
        <div className={`${poppins.className} font-medium text-xs`}>Hours</div>
        <div className={`${inter.className}`}>{displayHours}</div>
      </span>
      <span className={`text-hoverButton`}>:</span>
      <span className="text-text2">
        <div className={`${poppins.className} font-medium text-xs`}>
          Minutes
        </div>
        <div className={`${inter.className}`}>{displayMinutes}</div>
      </span>
      <span className={`text-hoverButton`}>:</span>
      <span className="text-text2">
        <div className={`${poppins.className} font-medium text-xs`}>
          Seconds
        </div>
        <div className={`${inter.className}`}>{displaySeconds}</div>
      </span>
    </div>
  );
};

export default CountdownTimer;
