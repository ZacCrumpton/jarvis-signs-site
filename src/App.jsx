import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FloatingCall from "./components/FloatingCall";
import Hero from "./components/Hero";
import { ProofStrip, ContactBlock } from "./components/HomeSections";
import Upload from "./pages/Upload";

// Simple stubs you can flesh out later:
function Work() { return <div className="mx-auto max-w-6xl px-4 py-12"><h1 className="text-3xl font-bold">Work</h1><p className="text-zinc-600">Gallery and case studies coming soon.</p></div>; }
function Services() { return <div className="mx-auto max-w-6xl px-4 py-12"><h1 className="text-3xl font-bold">Services</h1><p className="text-zinc-600">Design & Permitting, Fabrication, Installation, Maintenance, Vehicle Graphics, Wayfinding.</p></div>; }
function Process() { return <div className="mx-auto max-w-6xl px-4 py-12"><h1 className="text-3xl font-bold">Process</h1><ol className="list-decimal pl-5 space-y-2 text-zinc-700"><li>Consult</li><li>Design & Permitting</li><li>Fabricate</li><li>Install</li></ol></div>; }
function About() { return <div className="mx-auto max-w-6xl px-4 py-12"><h1 className="text-3xl font-bold">About</h1><p className="text-zinc-600">Family-owned, craftsmanship-driven sign shop serving Middle Tennessee.</p></div>; }
function Resources() { return <div className="mx-auto max-w-6xl px-4 py-12"><h1 className="text-3xl font-bold">Resources</h1><ul className="list-disc pl-5 text-zinc-700 space-y-1"><li>Artwork Prep Guide (coming soon)</li><li>Permit Checklist (coming soon)</li><li>Maintenance Tips (coming soon)</li></ul></div>; }
function NotFound() { return <div className="mx-auto max-w-6xl px-4 py-12"><h1 className="text-3xl font-bold">404</h1><p className="text-zinc-600">Page not found.</p></div>; }

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-zinc-100 dark:bg-[#0f1115] dark:text-zinc-100">

      <Header />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(1000px 600px at 10% -10%, rgba(59,130,246,0.12), transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(220,38,38,0.10), transparent 60%)",
        }}
      />


      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProofStrip />
            <ContactBlock />
          </>
        }/>
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Jarvis Signs • Middle Tennessee
        </div>
      </footer>

      <FloatingCall />
    </div>
  );
}
