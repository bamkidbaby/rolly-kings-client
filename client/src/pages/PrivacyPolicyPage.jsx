import Navbar from "../components/Navbar";

const garamond = { fontFamily: "'Cormorant Garamond', 'Georgia', serif" };

const sections = [
  {
    title: "Information we collect",
    body: "We may collect details you share directly with us, such as reservation information, contact details, event inquiries, and any preferences you provide while arranging your stay or visit.",
  },
  {
    title: "How we use it",
    body: "Information is used to manage bookings, respond to requests, improve our services, communicate about reservations, and support a smoother guest experience.",
  },
  {
    title: "Sharing and protection",
    body: "We do not sell your personal information. We only share it when necessary to operate our services, meet legal obligations, or work with trusted service providers who help us run the business.",
  },
  {
    title: "Your choices",
    body: "You may contact us to request access, correction, or deletion of information where applicable. You can also ask us to limit certain communications.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070605] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.18),_transparent_35%),linear-gradient(180deg,_rgba(10,8,7,0.98),_rgba(10,8,7,0.92))]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_35%,rgba(255,255,255,0.02))]" />

      <Navbar />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center px-6 py-24">
        <div className="w-full">
          <div className="max-w-2xl">
            <p
              className="text-[9px] uppercase tracking-[0.55em] text-[#C9A84C]/80"
              style={garamond}
            >
              Guest privacy
            </p>

            <h1
              className="mt-6 text-5xl font-light tracking-wide text-white md:text-7xl"
              style={garamond}
            >
              Privacy Policy
            </h1>

            <p className="mt-6 text-sm leading-7 text-white/68 md:text-base">
              This policy explains how Rolly Kings handles information collected
              through reservations, enquiries, and general guest interactions.
              It is written to be clear and straightforward so visitors know
              what to expect.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <article
                key={section.title}
                className="border border-white/10 bg-black/20 p-6 backdrop-blur-sm"
              >
                <h2
                  className="text-[1.45rem] font-light tracking-wide text-[#F0D18A]"
                  style={garamond}
                >
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-7 text-white/55">
            If you have privacy questions or want to update your information,
            please contact the hotel directly through the booking or reception
            channels.
          </p>
        </div>
      </main>
    </div>
  );
}
