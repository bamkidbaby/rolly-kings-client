import DigitalClock from "../components/DigitalClock";
import Navbar from "../components/Navbar";
import bg from "../assets/bg.mp4";

const garamond = { fontFamily: "'Cormorant Garamond', 'Georgia', serif" };

export default function WelcomePage() {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-black">
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-75"
        src={bg}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
      <div className="absolute inset-0 bg-[#1a0f05]/20" />

      {/* Navbar */}
      <Navbar />

      {/* Top-right — date */}
      <div className="absolute top-8 right-8 z-10 text-right select-none">
        <p
          className="text-[8px] uppercase tracking-[0.45em] text-white/30 font-light"
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

      {/* Center — clock */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 select-none">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-12 h-px bg-[#C9A84C]" />
          <p
            className="text-[9px] uppercase tracking-[0.5em] text-[#C9A84C] font-light"
            style={garamond}
          >
            Rolly Kings
          </p>
          <span className="block w-12 h-px bg-[#C9A84C]/50" />
        </div>

        <DigitalClock />

        <p
          className="mt-4 text-[8px] uppercase tracking-[0.5em] text-white/25 font-light"
          style={garamond}
        >
          Lagos · Nigeria
        </p>
      </div>

      {/* Bottom — tagline + CTA */}
      <div className="relative z-10 flex flex-col items-center gap-8 pb-16 select-none">
        {/* Tagline */}
        <div className="flex flex-col items-center gap-3">
          <p
            className="text-[11px] uppercase tracking-[0.45em] text-white/30 font-light"
            style={garamond}
          >
            Where elegance meets the night
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#reservations"
          className="group relative flex items-center gap-5 border border-white/20 hover:border-[#C9A84C]/60 px-10 py-4 transition-all duration-500"
          style={garamond}
        >
          {/* Animated gold fill on hover */}
          <span className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/8 transition-all duration-500" />

          <span className="block w-4 h-px bg-[#C9A84C]/50 group-hover:w-6 transition-all duration-300" />

          <span className="relative text-[11px] uppercase tracking-[0.45em] text-white/70 group-hover:text-[#C9A84C] transition-colors duration-300 font-light">
            Book Your Evening
          </span>

          <span className="block w-4 h-px bg-[#C9A84C]/50 group-hover:w-6 transition-all duration-300" />
        </a>

        {/* Scroll hint */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}
