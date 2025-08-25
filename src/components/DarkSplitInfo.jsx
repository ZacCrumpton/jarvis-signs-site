import { useState } from "react";

export default function DarkSplitInfo({ title, lead, more, image, onOpenGallery }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-zinc-950 py-14 text-white md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <div className="relative">
          <h3 className="text-3xl font-extrabold tracking-tight text-red-700 md:text-4xl">
            {title}
          </h3>
          <p className="mt-5 text-zinc-300">{lead}</p>

          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-6 inline-flex items-center justify-between gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
          >
            <span>{open ? "Read Less" : "Read More"}</span>
            <span className="text-white/70">{open ? "–" : "+"}</span>
          </button>

          {open && (
            <div className="mt-4 space-y-3 text-zinc-300">
              {Array.isArray(more) ? more.map((p, i) => <p key={i}>{p}</p>) : <p>{more}</p>}
            </div>
          )}

          <div className="mt-6">
            <button
              onClick={onOpenGallery}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Image Gallery
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={image} alt="context" className="w-full rounded-xl shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
