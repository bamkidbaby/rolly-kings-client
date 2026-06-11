import { useEffect, useState } from "react";

const TRAIL_COUNT = 5;

const createDots = () =>
  Array.from({ length: TRAIL_COUNT }, () => ({
    x: -100,
    y: -100,
    visible: false,
  }));

export default function CursorTrails() {
  const [dots, setDots] = useState(createDots);

  useEffect(() => {
    const handleMove = (event) => {
      const point = {
        x: event.clientX,
        y: event.clientY,
        visible: true,
      };

      setDots((prev) => [point, ...prev.slice(0, TRAIL_COUNT - 1)]);
    };

    const handleLeave = () => setDots(createDots());

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      {dots.map((dot, index) => {
        const size = 16 - index * 2;
        const opacity = 0.28 - index * 0.045;

        return (
          <span
            key={`${index}-${dot.x}-${dot.y}`}
            className="absolute rounded-full border border-[#F0D18A]/70 bg-[#C9A84C]/10 blur-[0.2px] transition-[transform,opacity] duration-500 ease-out"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: dot.visible ? Math.max(opacity, 0.04) : 0,
              transform: `translate3d(${dot.x - size / 2}px, ${dot.y - size / 2}px, 0)`,
              boxShadow: "0 0 20px rgba(240, 209, 138, 0.18)",
            }}
          />
        );
      })}
    </div>
  );
}
