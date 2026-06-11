import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import DigitalClock from "../components/DigitalClock";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.mp4";

const garamond = { fontFamily: "'Cormorant Garamond', 'Georgia', serif" };

export default function WelcomePage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncState = () => setIsPlaying(!video.paused);

    syncState();
    video.addEventListener("play", syncState);
    video.addEventListener("pause", syncState);

    return () => {
      video.removeEventListener("play", syncState);
      video.removeEventListener("pause", syncState);
    };
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        // Ignore autoplay or browser policy interruptions.
      }
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-85"
        src={bg}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/80" />
      <div className="absolute inset-0 bg-[#1a0f05]/35" />

      <Navbar />

      <div className="absolute right-8 top-8 z-20 flex select-none flex-col items-end gap-4">
        <p
          className="text-[8px] uppercase tracking-[0.45em] text-white/50 font-light"
          style={garamond}
        >
          {new Date().toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        aria-pressed={isPlaying}
        aria-label={
          isPlaying ? "Pause background video" : "Play background video"
        }
        className="group absolute bottom-6 right-6 z-20 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/35 text-white/75 backdrop-blur-md transition-all duration-300 hover:border-[#C9A84C]/70 hover:text-[#F0D18A]"
        style={garamond}
      >
        {isPlaying ? (
          <Pause size={14} strokeWidth={1.8} />
        ) : (
          <Play size={14} strokeWidth={1.8} className="ml-[1px]" />
        )}
      </button>

      <div className="relative z-10 flex flex-1 select-none flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex items-center gap-4">
          <span className="block h-px w-12 bg-[#F0D18A]" />
          <p
            className="text-[9px] uppercase tracking-[0.5em] text-[#F0D18A] font-light"
            style={garamond}
          >
            Rolly Kings
          </p>
          <span className="block h-px w-12 bg-[#F0D18A]/70" />
        </div>

        <DigitalClock />

        <p
          className="mt-4 text-[8px] uppercase tracking-[0.5em] text-white/40 font-light"
          style={garamond}
        >
          Lagos · Nigeria
        </p>
      </div>

      <div className="relative z-10 flex select-none flex-col items-center gap-8 pb-16">
        <div className="flex flex-col items-center gap-3">
          <p
            className="text-[11px] uppercase tracking-[0.45em] text-white/45 font-light"
            style={garamond}
          >
            Where elegance meets the night
          </p>
        </div>

        <a
          href="#reservations"
          className="group relative flex cursor-pointer items-center gap-5 border border-white/25 bg-black/20 px-10 py-4 transition-all duration-500 hover:border-[#F0D18A]/70 hover:bg-black/30"
          style={garamond}
        >
          <span className="absolute inset-0 bg-[#C9A84C]/0 transition-all duration-500 group-hover:bg-[#C9A84C]/15" />
          <span className="block h-px w-2 md:w-4 bg-[#F0D18A]/70 transition-all duration-300 group-hover:w-2 md:group-hover:w-6" />
          <span className="relative text-[11px] uppercase tracking-[0.45em] text-white/85 transition-colors duration-300 font-light group-hover:text-[#F0D18A]">
            Reserve your Evening
          </span>
          <span className="block h-px w-4 bg-[#F0D18A]/70 transition-all duration-300 group-hover:w-6" />
        </a>

        <div className="mt-2 flex flex-col items-center gap-2">
          <div className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}
