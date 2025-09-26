// src/pages/Resources.jsx
export default function Resources() {
  const cards = [
    { title: "Insurance & Licensing", note: "PDF coming soon" },
    { title: "Care & Maintenance", note: "PDF coming soon" },
    { title: "Prep Checklist (Before We Visit)", note: "PDF coming soon" },
    { title: "Service Policies", note: "PDF coming soon" }, // renamed from Warranty
    { title: "Safety Guidelines", note: "PDF coming soon" },
    { title: "Artwork Prep Guide", note: "PDF coming soon" },
  ];

  const faq = [
    { q: "Are you licensed and insured?", a: "Yes — documentation will be posted here once provided." },
    { q: "How should I prepare for a visit?", a: "We’ll share a simple checklist (parking access, pet safety, on-site contact)." },
    { q: "Do you offer warranties?", a: "We publish service policies rather than a formal warranty. Details will be listed here once finalized." },
  ];

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">Resources</h1>
        <p className="mt-2 text-lg text-zinc-400">
          Helpful downloads and information for our clients
        </p>
      </section>

      {/* Resource Cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6 max-w-6xl mx-auto">
        {cards.map(({ title, note }) => (
          <div
            key={title}
            className="border border-zinc-800 rounded-xl p-6 shadow-sm bg-[#1a1c22]"
          >
            <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
            <p className="text-sm text-zinc-500 mt-1 italic">{note}</p>
            <div className="mt-4 h-28 bg-zinc-900 rounded-md grid place-items-center text-2xl text-zinc-600">
              📄
            </div>
          </div>
        ))}
      </section>

      {/* Central FAQ */}
      <section id="faq" className="max-w-3xl mx-auto p-6">
        <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
        {faq.map(({ q, a }, i) => (
          <details key={i} className="mt-3 border border-zinc-800 rounded-lg p-4 bg-[#1a1c22]">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-zinc-400">{a}</p>
          </details>
        ))}
      </section>

      {/* Footer Note */}
      <div className="text-center py-10 text-zinc-500">
        <p>📌 Please provide PDFs, photos, and videos to include here.</p>
      </div>
    </main>
  );
}
