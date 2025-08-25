import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Props (either mode works):
 * A) Gallery mode:
 *   - isOpen, items=[{src, alt?, caption?}], index, onIndexChange, onClose
 * B) Legacy single image:
 *   - isOpen, src, alt?, caption?, onClose
 */
export default function Lightbox(props) {
  const { isOpen, onClose } = props;

  // Normalize to an items[] array
  const items = useMemo(() => {
    if (Array.isArray(props.items) && props.items.length) return props.items;
    if (props.src) return [{ src: props.src, alt: props.alt, caption: props.caption }];
    return [];
  }, [props.items, props.src, props.alt, props.caption]);

  // Controlled vs uncontrolled index
  const controlled = typeof props.onIndexChange === "function";
  const [uIndex, setUIndex] = useState(props.index ?? 0);
  useEffect(() => { if (isOpen) setUIndex(props.index ?? 0); }, [isOpen, props.index]);

  const index = controlled ? (props.index ?? 0) : uIndex;
  const setIndex = controlled ? props.onIndexChange : setUIndex;

  const count = items.length;
  const active = count ? items[(index + count) % count] : null;

  const go = (dir) => {
    if (count < 2) return;
    setIndex((index + dir + count) % count);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, index, count]);

  return (
    <AnimatePresence>
      {isOpen && active && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85"
          onClick={onClose}
        >
          {/* Image */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.img
              key={active.src}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              src={active.src}
              alt={active.alt || active.caption || ""}
              className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Top bar */}
          <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-3">
            <button
              onClick={(e) => { e.stopPropagation(); onClose?.(); }}
              className="rounded-md bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur hover:bg-white/20"
            >
              Close
            </button>
            <div className="flex items-center gap-2">
              {count > 1 && (
                <span className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/90 backdrop-blur">
                  {index + 1} / {count}
                </span>
              )}
              <a
                href={active.src}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-md bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur hover:bg-white/20"
              >
                View full size
              </a>
            </div>
          </div>

          {/* Caption */}
          {(active.caption || active.alt) && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
              <div className="mx-auto max-w-5xl rounded-lg bg-white/10 px-3 py-2 text-center text-sm text-white backdrop-blur">
                {active.caption || active.alt}
              </div>
            </div>
          )}

          {/* Prev / Next */}
          {count > 1 && (
            <>
              <button
                aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"
              >
                ←
              </button>
              <button
                aria-label="Next"
                onClick={(e) => { e.stopPropagation(); go(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20"
              >
                →
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}