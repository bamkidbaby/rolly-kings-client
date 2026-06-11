import Navbar from "../components/Navbar";

const garamond = { fontFamily: "'Cormorant Garamond', 'Georgia', serif" };

const highlights = [
  {
    title: "Hospitality with intention",
    body: "Rolly Kings is designed to feel warm, polished, and memorable from the first welcome to the final goodbye.",
  },
  {
    title: "Distinct experiences",
    body: "From dining and lounge moments to private gatherings and evening entertainment, every space is tuned for a different pace of the night.",
  },
  {
    title: "Service that feels personal",
    body: "We aim for attentive service, thoughtful details, and an atmosphere that lets guests settle in comfortably.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070605] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.18),_transparent_35%),linear-gradient(180deg,_rgba(10,8,7,0.98),_rgba(10,8,7,0.92))]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_35%,rgba(255,255,255,0.02))]" />

      <Navbar />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="w-full max-w-5xl">
          <div className="max-w-2xl">
            <p
              className="text-[9px] uppercase tracking-[0.55em] text-[#C9A84C]/80"
              style={garamond}
            >
              The House
            </p>

            <h1
              className="mt-6 text-5xl font-light tracking-wide text-white md:text-7xl"
              style={garamond}
            >
              About Rolly Kings
            </h1>

            <p className="mt-6 text-sm leading-7 text-white/68 md:text-base">
              Rolly Kings is a hospitality experience shaped around relaxed
              luxury, considered service, and spaces that feel alive after dark.
              The goal is simple: create a place where guests can dine, unwind,
              celebrate, and return with ease.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="border border-white/10 bg-black/20 p-6 backdrop-blur-sm"
              >
                <h2
                  className="text-[1.45rem] font-light tracking-wide text-[#F0D18A]"
                  style={garamond}
                >
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
