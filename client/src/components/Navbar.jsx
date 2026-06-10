import { useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Rooms & Suites", href: "#" },
  { label: "Dining", href: "#" },
  { label: "Spa & Wellness", href: "#" },
  { label: "Events", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Reservations", href: "#" },
];

const garamond = { fontFamily: "'Cormorant Garamond', 'Georgia', serif" };

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger button — always visible */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed top-8 left-8 z-50 flex flex-col gap-[5px] group"
      >
        <span className="block w-6 h-px bg-white/70 transition-all duration-300 group-hover:bg-[#C9A84C]" />
        <span className="block w-4 h-px bg-white/70 transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:w-6" />
        <span className="block w-6 h-px bg-white/70 transition-all duration-300 group-hover:bg-[#C9A84C]" />
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer — slides in from left, NOT full width */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-[min(420px,85vw)] bg-[#0d0b09]/95 backdrop-blur-md
          flex flex-col justify-between py-16 px-12
          transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-8 right-8 text-white/40 hover:text-[#C9A84C] transition-colors duration-200"
        >
          <X size={18} strokeWidth={1} />
        </button>

        {/* Top — wordmark */}
        <div>
          <div className="flex items-center gap-3 mb-16">
            <span className="block w-6 h-px bg-[#C9A84C]/50" />
            <p
              className="text-[9px] uppercase tracking-[0.5em] text-[#C9A84C]/70 font-light"
              style={garamond}
            >
              Rolly Kings
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 py-3 border-b border-white/5 hover:border-[#C9A84C]/20 transition-colors duration-300"
              >
                <span
                  className="text-[11px] text-white/20 font-light tabular-nums"
                  style={garamond}
                >
                  0{i + 1}
                </span>
                <span
                  className="text-[1.35rem] font-light text-white/75 tracking-wide group-hover:text-[#C9A84C] transition-colors duration-300"
                  style={garamond}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom — contact / location */}
        <div className="flex flex-col gap-3">
          <p
            className="text-[8px] uppercase tracking-[0.45em] text-white/20 font-light"
            style={garamond}
          >
            Lagos · Nigeria
          </p>

          <a
            href="tel:+2341234567890"
            className="text-[11px] text-white/35 hover:text-[#C9A84C] tracking-widest transition-colors duration-200"
            style={garamond}
          >
            +234 123 456 7890
          </a>
        </div>
      </div>
    </>
  );
}
