export default function ThumbStrip({ images = [], onOpen }) {
  return (
    <div className="bg-zinc-900 py-3">
      <div className="no-scrollbar mx-auto max-w-7xl overflow-x-auto px-2">
        <div className="flex snap-x snap-mandatory gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onOpen?.(i)}
              className="flex-none snap-start rounded-md"
              aria-label={`Open image ${i + 1}`}
            >
              <img
                src={src}
                alt={`thumb-${i}`}
                className="h-24 w-auto rounded-md object-cover opacity-90 transition hover:opacity-100"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}