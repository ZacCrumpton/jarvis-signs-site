export default function TwoColFeature({ kicker, title, copy, image }) {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:py-16">
      <div className="max-w-xl">
        {kicker && (
          <div className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-red-600">
            {kicker}
          </div>
        )}
        <h2 className="text-4xl font-extrabold tracking-tight text-blue-500 md:text-5xl">
          {title}
        </h2>
        <p className="mt-6 text-zinc-300">{copy}</p>
      </div>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl border border-zinc-200 shadow-md"
        />
      </div>
    </section>
  );
}
