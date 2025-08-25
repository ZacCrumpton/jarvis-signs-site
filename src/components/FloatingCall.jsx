// src/components/FloatingCall.jsx
export default function FloatingCall() {
  return (
    <a
      href="tel:+16158656062"   // swap to your PHONE_TEL if you wired site.js
      className="fixed bottom-4 right-4 z-40 rounded-full bg-red-600 px-5 py-3 text-white shadow-lg md:hidden"
      aria-label="Call now"
    >
      Call Now
    </a>
  );
}
