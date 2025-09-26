// src/pages/Process.jsx
export default function Process() {
  const steps = [
    {
      title: "Consult",
      body:
        "Tell us about your sign goals, location, budget, and timeline. We’ll review constraints (city codes, electrical, visibility).",
      need: "Site photos, rough dimensions, any brand files (logo/colors).",
    },
    {
      title: "Design & Permitting",
      body:
        "We prepare a design proof to scale and handle permitting guidance. Municipal requirements vary by city/county.",
      need: "Vector logo if available (AI/SVG/PDF). Decision-maker approvals.",
    },
    {
      title: "Fabricate",
      body:
        "Our team builds your sign in-house—materials, lighting, and finishes matched to spec.",
      need: "Signed proof + deposit (if required).",
    },
    {
      title: "Install",
      body:
        "We coordinate access, electrical, and mounting hardware. Safety and code compliance are prioritized on-site.",
      need: "Clear access to the install area; confirm date/time and on-site contact.",
    },
    {
      title: "Follow-up",
      body:
        "We verify everything’s secure, lit, and aligned. We’ll share basic care tips and service policies.",
      need: "Point-of-contact for any post-install questions.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
        <section className="py-12 text-center">
        <h1 className="text-4xl font-bold">Our Process</h1>
        <p className="mt-2 text-lg text-zinc-400">
            From first call to final install—here’s how we get your sign live.
        </p>
        <p className="mt-3 text-sm text-zinc-500">
            Licensed & insured • OSHA-trained installers • Serving Middle Tennessee
        </p>
        </section>

      {/* Timeline */}
      <ol className="max-w-5xl mx-auto px-6 space-y-6">
        {steps.map(({ title, body, need }) => (
          <li
            key={title}
            className="border border-zinc-800 rounded-xl bg-[#1a1c22] p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-zinc-300">{body}</p>

            <div className="mt-4 rounded-lg bg-zinc-900 border border-zinc-800 p-4">
              <p className="text-sm text-zinc-400">
                <span className="font-medium text-zinc-200">What we need from you:</span>{" "}
                {need}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <a
          href="/upload"
          className="inline-flex items-center justify-center rounded-lg border border-blue-500 px-5 py-3 text-sm font-medium text-blue-300 hover:bg-blue-500/10"
        >
          Ready to start? Upload artwork →
        </a>
        <p className="mt-3 text-sm text-zinc-500">
          Prefer email? Send files and questions to your Jarvis contact.
        </p>
      </section>
    </main>
  );
}
