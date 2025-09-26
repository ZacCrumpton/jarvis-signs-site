// src/pages/About.jsx
export default function About() {
  const values = [
    { title: "Craftsmanship", body: "Every sign is built for clarity, durability, and brand accuracy." },
    { title: "Integrity", body: "Transparent process, fair quotes, follow-through after install." },
    { title: "Safety", body: "OSHA-aware procedures, proper equipment, code-compliant installs." },
  ];

  const stats = [
    { k: "15+", label: "Years combined experience" },
    { k: "1000+", label: "Projects completed" },
    { k: "1 Week", label: "Typical proof turnaround" },
    { k: "Middle TN", label: "Local focus" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero / Intro */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <p className="text-sm uppercase tracking-wider text-zinc-400">About Us</p>
            <h1 className="mt-2 text-4xl font-bold">Signs that work as hard as you do.</h1>
            <p className="mt-4 text-zinc-300">
              We’re a Middle Tennessee sign shop focused on clear communication, clean design, and
              installs you never have to second-guess. From small businesses to multi-site rollouts,
              we handle design proofs, permitting guidance, fabrication, and installation.
            </p>
            <p className="mt-3 text-zinc-400">
              Family-owned and craftsmanship-driven, we believe the best sign is one that looks
              great <em>and</em> is easy to live with—day one and year five.
            </p>

            {/* Trust line */}
            <div className="mt-6 text-sm text-zinc-500">
              Licensed & insured • OSHA-aware installers • Serving Middle Tennessee
            </div>

            {/* CTA */}
            <div className="mt-6 flex gap-3">
            <a
                href="/work"
                className="inline-flex items-center rounded-lg border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800/60"
            >
                See Our Work
            </a>
            <a
                href="tel:+16158656062"  // <— replace with the real number in E.164 format
                className="inline-flex items-center rounded-lg border border-green-500 px-4 py-2 text-sm text-green-300 hover:bg-green-500/10"
            >
                Call Us →
            </a>
            </div>
          </div>

          {/* Photo area (owners/crew placeholders) */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="aspect-[4/3] rounded-xl bg-zinc-900 border border-zinc-800 grid place-items-center text-zinc-600">
              Owner / Crew Photo
            </div>
            <div className="aspect-[4/3] rounded-xl bg-zinc-900 border border-zinc-800 grid place-items-center text-zinc-600">
              Shop / Fabrication Photo
            </div>
            <div className="aspect-[4/3] rounded-xl bg-zinc-900 border border-zinc-800 grid place-items-center text-zinc-600 sm:col-span-2">
              Install In-Progress Photo
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rounded-2xl border border-zinc-800 bg-[#1a1c22] p-6">
          <h2 className="text-2xl font-semibold">What we stand for</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {values.map(({ title, body }) => (
              <div key={title}>
                <h3 className="font-medium">{title}</h3>
                <p className="mt-1 text-zinc-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ k, label }) => (
            <div
              key={label}
              className="rounded-xl border border-zinc-800 bg-[#1a1c22] p-6 text-center"
            >
              <div className="text-3xl font-bold">{k}</div>
              <div className="mt-1 text-sm text-zinc-400">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
