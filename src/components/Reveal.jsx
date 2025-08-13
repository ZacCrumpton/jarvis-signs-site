import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Tag = "div", delay = 0, children, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-500 will-change-transform",
        on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
