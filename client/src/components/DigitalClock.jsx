import { useEffect, useState } from "react";

export default function DigitalClock() {
  const formatTime = () =>
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  const [time, setTime] = useState(formatTime());

  useEffect(() => {
    const timer = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  const [hours, minutes] = time.split(":");

  return (
    <div
      key={time}
      className="clock-time-enter flex items-end gap-3 leading-none"
      style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
    >
      <span className="text-[9rem] font-extralight text-white/90 tracking-tight tabular-nums">
        {hours}
      </span>
      <span className="text-[9rem] font-extralight text-[#C9A84C]/70 leading-none mb-1">
        :
      </span>
      <span className="text-[9rem] font-extralight text-white/90 tracking-tight tabular-nums">
        {minutes}
      </span>
    </div>
  );
}
