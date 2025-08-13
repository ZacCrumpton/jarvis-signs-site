import { PHONE_DISPLAY } from "../lib/site";

export default function Upload() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Upload Artwork</h1>
      <p className="mt-2 text-zinc-600">
        Send production-ready files (vector preferred). We’ll review and call you if we need anything.
        We do not manage inquiries by email.
      </p>

      <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-zinc-600">
        <li>Preferred: .AI, .EPS, .PDF (outlined); Also: high-res .PNG / .JPG (300dpi at size)</li>
        <li>Include your desired width/height and install location in the notes</li>
        <li>Questions? Call {PHONE_DISPLAY}</li>
      </ul>

      <form
        name="art-upload"
        method="POST"
        data-netlify="true"
        encType="multipart/form-data"
        className="mt-8 grid gap-4 rounded-2xl border p-6"
      >
        <input type="hidden" name="form-name" value="art-upload" />

        <label className="grid gap-1">
          <span>Business Name</span>
          <input name="business" className="rounded-lg border px-3 py-2" required />
        </label>

        <label className="grid gap-1">
          <span>Phone (we will call)</span>
          <input name="phone" className="rounded-lg border px-3 py-2" required />
        </label>

        <label className="grid gap-1">
          <span>Artwork File</span>
          <input name="file" type="file" className="rounded-lg border px-3 py-2" required />
        </label>

        <label className="grid gap-1">
          <span>Notes (optional)</span>
          <textarea name="notes" rows="5" className="rounded-lg border px-3 py-2" placeholder="Dimensions, materials, colors, install address…" />
        </label>

        <button className="rounded-lg bg-zinc-900 px-4 py-2 text-white">Upload</button>
      </form>

      <p className="mt-3 text-xs text-zinc-500">
        Files are stored securely. Disable email notifications in Netlify if you prefer dashboard-only.
      </p>
    </div>
  );
}
