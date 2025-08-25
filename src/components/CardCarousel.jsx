import { useRef } from "react";

export default function CardCarousel({ items = [] }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: dir * (width * 0.9), behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:py-16">
      <h4 className="mb-6 text-3xl font-extrabold tracking-tight text-zinc-900 md:mb-8 md:text-4xl">
        Additional Sign Options
      </h4>

      <div className="relative">
        <div
          ref={ref}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {items.map((it, i) => (
            <article
              key={i}
              className="snap-center rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:min-w-[46%]"
            >
              <div className="flex items-center gap-6">
                <div className="h-28 w-28 overflow-hidden rounded-full border border-zinc-200">
                  <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h5 className="text-xl font-extrabold tracking-tight text-zinc-900">
                    {it.title}
                  </h5>
                  <p className="mt-2 text-sm text-zinc-600">{it.copy}</p>
                  <button className="mt-4 rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-zinc-800">
                    Learn More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

        <div className="mt-4 flex justify-between">
          <button
            onClick={() => scroll(-1)}
            className="rounded-full border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-50"
          >
            ←
          </button>
          <button
            onClick={() => scroll(1)}
            className="rounded-full border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-50"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
