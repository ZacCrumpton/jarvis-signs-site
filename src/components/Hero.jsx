import { PHONE_DISPLAY, PHONE_TEL } from "../lib/site";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="relative overflow-clip bg-white dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 opacity-30"
           style={{background:
            "linear-gradient(120deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%), radial-gradient(1200px 600px at 10% -10%, rgba(29,78,216,0.25), rgba(220,38,38,0.2) 40%, transparent 70%)"}}/>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-20 md:grid-cols-2">
        <div className="space-y-6">
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

        <div className="aspect-video w-full overflow-hidden rounded-2xl border
                        border-zinc-200 bg-[url('/hero.webp')] bg-cover bg-center shadow-xl
                        dark:border-white/10" />
      </div>
    </section>
  );
}
