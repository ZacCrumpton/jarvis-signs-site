import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkClass =
    "hover:text-zinc-900 dark:hover:text-white transition-colors";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1115]/80 backdrop-blur dark:border-white/10 dark:bg-zinc-950/80">
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-3 px-4 py-3">
        {/* Brand */}
        <div className="col-span-6 md:col-span-3">
          <NavLink to="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-white">Jarvis</span>{" "}
            <span className="text-blue-500">Signs</span>
          </NavLink>
        </div>

        {/* Desktop nav */}
        <nav className="col-span-12 hidden md:flex md:col-span-6 justify-center gap-5 text-sm text-zinc-300 dark:text-zinc-200">
          <NavLink to="/work" className={linkClass}>Work</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/process" className={linkClass}>Process</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/resources" className={linkClass}>Resources</NavLink>
          <NavLink to="/upload" className={linkClass}>Upload Art</NavLink>
        </nav>

        {/* Desktop Call */}
        <div className="col-span-6 md:col-span-3 flex justify-end">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden md:inline-flex rounded-xl bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Call {PHONE_DISPLAY}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/15 px-3 py-2 text-zinc-200 hover:bg-white/5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-200 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex flex-col text-zinc-200">
            <NavLink to="/work" className="px-3 py-2 rounded hover:bg-white/5" onClick={() => setOpen(false)}>Work</NavLink>
            <NavLink to="/services" className="px-3 py-2 rounded hover:bg-white/5" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/process" className="px-3 py-2 rounded hover:bg-white/5" onClick={() => setOpen(false)}>Process</NavLink>
            <NavLink to="/about" className="px-3 py-2 rounded hover:bg-white/5" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/resources" className="px-3 py-2 rounded hover:bg-white/5" onClick={() => setOpen(false)}>Resources</NavLink>
            <NavLink to="/upload" className="px-3 py-2 rounded hover:bg-white/5" onClick={() => setOpen(false)}>Upload Art</NavLink>

            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-flex items-center justify-center rounded-xl border border-green-500 px-3 py-2 text-sm text-green-300 hover:bg-green-500/10"
              onClick={() => setOpen(false)}
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </nav>
      </div>

      {/* red → blue accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-red-600 via-red-600/0 to-blue-600" />
    </header>
  );
}
