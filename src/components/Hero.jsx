import { PHONE_DISPLAY, PHONE_TEL } from "../lib/site";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="relative overflow-clip bg-white dark:bg-zinc-950">
     <div
        aria-hidden
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/work/hero.JPG')" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-gradient-to-l from-black/80 via-black/50 to-transparent"
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-30"
        style={{
          background:
            "linear-gradient(120deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%), radial-gradient(1200px 600px at 10% -10%, rgba(29,78,216,0.25), rgba(220,38,38,0.2) 40%, transparent 70%)",
        }}
      />
      <div className="relative z-20 mx-auto grid max-w-6xl items-end justify-items-end text-right gap-8 px-4 py-20 md:grid-cols-2">
        <div className="md:col-start-2 md:row-start-1 md:justify-self-end max-w-xl text-right">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Make your name the landmark.
          </h1>
          <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
            From drawings to crane day — Jarvis Signs brings it to life with precision and speed.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${PHONE_TEL}`}
               className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
              Call {PHONE_DISPLAY}
            </a>
            <Link to="/work"
               className="rounded-xl border px-5 py-3 text-zinc-900 hover:bg-zinc-50
                          border-zinc-300 dark:border-white/30 dark:text-white dark:hover:bg-white/10"
                          aria-label="See our work">
              See Our Work
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
