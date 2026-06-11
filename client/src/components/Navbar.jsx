import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import tel from "../data/rolly-kings";

const navLinks = [
  { label: "Rooms & Suites", href: "#" },
  { label: "Dining & Lounge", href: "#" },
  { label: "About Rolly Kings", href: "/about-rolly-kings" },
  {
    label: "Restaurants & Bars",
    children: [
      { label: "Restaurants", href: "/restaurants" },
      { label: "VIP lounge", href: "/vip-lounge" },
      { label: "Bush Bar", href: "/bush-bar" },
      { label: "Rooftop Bar", href: "/rooftop-bar" },
      { label: "Pool Bar", href: "/pool-bar" },
    ],
  },
  { label: "Events & Reception", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Reservations", href: "#" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const garamond = { fontFamily: "'Cormorant Garamond', 'Georgia', serif" };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [restaurantsOpen, setRestaurantsOpen] = useState(false);
  const scrollAreaRef = useRef(null);

  const openMenu = () => {
    setRestaurantsOpen(false);
    setOpen(true);
  };

  const closeMenu = () => {
    setRestaurantsOpen(false);
    setOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (open && scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navigateTo = (href) => {
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
    closeMenu();
  };

  return (
    <>
      {/* Trigger button — always visible */}
      <button
        onClick={openMenu}
        aria-label="Open menu"
        className="group fixed left-8 top-8 z-50 flex cursor-pointer flex-col gap-[5px]"
      >
        <span className="block w-6 h-px bg-white/70 transition-all duration-300 group-hover:bg-[#C9A84C]" />
        <span className="block w-4 h-px bg-white/70 transition-all duration-300 group-hover:bg-[#C9A84C] group-hover:w-6" />
        <span className="block w-6 h-px bg-white/70 transition-all duration-300 group-hover:bg-[#C9A84C]" />
      </button>

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer — slides in from left, NOT full width */}
      <div
        className={`fixed top-0 left-0 z-50 flex h-full w-[min(420px,85vw)] flex-col overflow-hidden bg-[#0d0b09]/95 backdrop-blur-md
          py-16 px-12
          transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close */}
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="absolute right-8 top-8 cursor-pointer text-white/40 transition-colors duration-200 hover:text-[#C9A84C]"
        >
          <X size={18} strokeWidth={1} />
        </button>

        {/* Top — wordmark */}
        <div className="flex min-h-0 flex-1 flex-col">
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
          <nav
            ref={scrollAreaRef}
            className="hide-scrollbar flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto pr-2"
          >
            {navLinks.map((link, i) => {
              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="border-b border-white/5 py-3"
                  >
                    <button
                      type="button"
                      onClick={() => setRestaurantsOpen((value) => !value)}
                      className="group flex w-full cursor-pointer items-center gap-4 transition-colors duration-300"
                    >
                      <span
                        className="text-[11px] text-white/20 font-light tabular-nums"
                        style={garamond}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="text-[1.25rem] font-light text-white/75 tracking-wide transition-colors duration-300 group-hover:text-[#C9A84C]"
                        style={garamond}
                      >
                        {link.label}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`ml-auto text-white/35 transition-transform duration-300 ${
                          restaurantsOpen ? "rotate-180 text-[#C9A84C]" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        restaurantsOpen
                          ? "mt-3 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden pl-10">
                        <div className="flex flex-col gap-1 border-l border-white/10 pl-5">
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={(event) => {
                                event.preventDefault();
                                navigateTo(child.href);
                              }}
                              className="group flex items-center justify-between text-[12px] uppercase tracking-[0.28em] text-white/45 transition-colors duration-200 hover:text-[#C9A84C]"
                              style={garamond}
                            >
                              <span>{child.label}</span>
                              <span className="h-px w-4 bg-white/15 transition-all duration-200 group-hover:w-6 group-hover:bg-[#C9A84C]/70" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => {
                    if (link.href !== "#") {
                      event.preventDefault();
                      navigateTo(link.href);
                    } else {
                      setOpen(false);
                    }
                  }}
                  className="group flex cursor-pointer items-center gap-4 border-b border-white/5 py-3 transition-colors duration-300 hover:border-[#C9A84C]/20"
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
              );
            })}
          </nav>
        </div>

        {/* Bottom — contact / location */}
        <div className="mt-8 flex flex-col gap-3 pt-6">
          <p
            className="text-[8px] uppercase tracking-[0.45em] text-white/20 font-light"
            style={garamond}
          >
            Lagos · Nigeria
          </p>

          <a
            href={`tel:${tel}`}
            className="cursor-pointer text-[11px] tracking-widest text-white/35 transition-colors duration-200 hover:text-[#C9A84C]"
            style={garamond}
          >
            {tel}
          </a>
        </div>
      </div>
    </>
  );
}
