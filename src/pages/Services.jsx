import React from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Custom Sign Design",
    blurb:
      "Brand-forward concepts, proofs, and production-ready art files tailored to your space and budget.",
    points: ["Logo & type treatment", "Material + finish guidance", "Permitting-ready drawings"],
    image: "/work/grandHyatt_WallMount2.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path fill="currentColor" d="M4 5h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z" />
      </svg>
    ),
  },
  {
    title: "Fabrication",
    blurb:
      "In-house build quality across metal, acrylic, wood, and digital components—optimized for durability.",
    points: ["CNC routing & laser", "LED modules & wiring", "Powder coat & paint"],
    image: "/work/tsu_Scoreboard.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path fill="currentColor" d="M3 3h18v4H3zM3 9h8v12H3zm10 0h8v12h-8z" />
      </svg>
    ),
  },
  {
    title: "Installation",
    blurb:
      "Licensed, insured installs with site surveys, safety plans, and minimal business disruption.",
    points: ["Site surveys", "Lift & rigging", "Electrical hook‑ups"],
    image: "/work/streetsigns_01.JPG",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path fill="currentColor" d="M4 17h16v2H4zm0-6h16v2H4zm0-6h16v2H4z" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Repair",
    blurb:
      "Keep signs bright and compliant with scheduled service or on‑call repair and retrofits.",
    points: ["LED retrofits", "Panel/face replacement", "Cleaning & reseal"],
    image: "/work/bridgestone_Cabinet.jpg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path fill="currentColor" d="M12 2a5 5 0 015 5v3h2a3 3 0 010 6h-2v3a5 5 0 11-10 0v-3H5a3 3 0 010-6h2V7a5 5 0 015-5z" />
      </svg>
    ),
  },
  {
    title: "Vehicle Wraps & Graphics",
    blurb:
      "From spot decals to full wraps—color-accurate prints and expert installs that last.",
    points: ["Fleet standards", "UV‑stable inks", "Paint‑safe removal"],
    image: "/work/vandy_VehicleWrap.JPG",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path fill="currentColor" d="M3 13h18v6H3zm2-4h6l2 3H5z" />
      </svg>
    ),
  },
  {
    title: "Wayfinding & ADA",
    blurb:
      "Smart navigation systems that meet ADA guidelines and elevate the visitor experience.",
    points: ["ADA compliant", "Tactile & Braille", "Campus & interior maps"],
    image: "/work/grandHyatt_ADA.jpeg",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path fill="currentColor" d="M11 2h2v20h-2zM4 7h8v2H4zm0 8h16v2H4z" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
  "Retail & Restaurants",
  "Corporate & Campuses",
  "Healthcare",
  "Apartments & HOA",
  "Industrial & Warehousing",
  "Events & Pop‑ups",
];

export default function Services() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="uppercase tracking-[0.2em] text-sm text-neutral-400">Jarvis Signs</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Full‑service signage, from concept to install.
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300">
            We design, fabricate, and install signs that work as hard as your brand. Pick a service below or
            talk to us about a turnkey package.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-medium hover:bg-red-500 transition">
              Get a Quick Quote
            </a>
            <Link to='/work' className="rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-medium hover:border-neutral-500 transition">
              See Recent Work
            </Link>
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(239,68,68,0.25),rgba(0,0,0,0))]" />
      </section>





      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            Flexible engagement: pick one service or bundle design → fabrication → installation for faster timelines and tighter quality control.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-neutral-600 transition">
              {s.image && (
                    <div className="mb-4 overflow-hidden rounded-xl border border-neutral-800">
                        <div className="relative aspect-[16/9]">
                            <img
                                src={s.image}
                                alt={`${s.title} example`}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                )}
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-neutral-800 p-2 text-red-500 group-hover:text-red-400" aria-hidden>
                  {s.icon}
                </div>
                
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-neutral-300 text-sm leading-relaxed">{s.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-400 list-disc pl-5">
                {s.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* FAQs using native details/summary (no JS) */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16" id="faq">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-3">
          {[
            {
              q: "Can you help with permits?",
              a: "Yes. We prepare drawings and handle municipal permit submissions where required.",
            },
            {
              q: "Do you repair existing signs?",
              a: "We service most sign types—even those we didn’t fabricate—including LED retrofits.",
            },
            {
              q: "How fast is a typical project?",
              a: "Small projects can turn in 2–3 weeks; larger exterior signs are often 6–10 weeks depending on permitting and materials.",
            },
          ].map((f) => (
            <details key={f.q} className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 open:border-neutral-600">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                <span className="text-neutral-500 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-sm text-neutral-300">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
