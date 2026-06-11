import Navbar from "../components/Navbar";

const garamond = { fontFamily: "'Cormorant Garamond', 'Georgia', serif" };

export default function VenuePage({ title, eyebrow, description }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070605] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.18),_transparent_40%),linear-gradient(180deg,_rgba(10,8,7,0.96),_rgba(10,8,7,0.9))]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_35%,rgba(255,255,255,0.02))]" />

      <Navbar />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 text-center">
        <div className="max-w-3xl">
          <p
            className="text-[9px] uppercase tracking-[0.55em] text-[#C9A84C]/80"
            style={garamond}
          >
            {eyebrow}
          </p>

          <h1
            className="mt-6 text-5xl font-light tracking-wide text-white md:text-7xl"
            style={garamond}
          >
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            {description}
          </p>

          <a
            href="/"
            className="mt-10 inline-flex items-center gap-3 border border-white/20 bg-black/25 px-7 py-3 text-[10px] uppercase tracking-[0.4em] text-white/80 transition-colors duration-200 hover:border-[#C9A84C]/60 hover:text-[#C9A84C]"
            style={garamond}
          >
            Back to home
          </a>
        </div>
      </main>
    </div>
  );
}
