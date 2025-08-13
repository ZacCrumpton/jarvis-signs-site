import { NavLink } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1115]/80 backdrop-blur
        dark:border-white/10 dark:bg-zinc-950/80">

      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-3 px-4 py-3">
        <div className="col-span-6 md:col-span-3">
          <NavLink to="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-white">Jarvis</span>{" "}
            <span className="text-blue-500">Signs</span>
          </NavLink>
        </div>

        <nav className="col-span-12 hidden md:flex md:col-span-6 justify-center gap-5 text-sm
            text-zinc-300 dark:text-zinc-200">
                
          <NavLink to="/work" className="hover:text-zinc-900 dark:hover:text-white">Work</NavLink>
          <NavLink to="/services" className="hover:text-zinc-900 dark:hover:text-white">Services</NavLink>
          <NavLink to="/process" className="hover:text-zinc-900 dark:hover:text-white">Process</NavLink>
          <NavLink to="/about" className="hover:text-zinc-900 dark:hover:text-white">About</NavLink>
          <NavLink to="/resources" className="hover:text-zinc-900 dark:hover:text-white">Resources</NavLink>
          <NavLink to="/upload" className="hover:text-zinc-900 dark:hover:text-white">Upload Art</NavLink>
        </nav>

        <div className="col-span-6 md:col-span-3 flex justify-end">
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-xl bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      {/* red → blue accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-red-600 via-red-600/0 to-blue-600" />
    </header>
  );
}
