import ShopMap from "./ShopMap";

export function ProofStrip() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border p-6
                        bg-zinc-50 border-zinc-200
                        dark:bg-white/5 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6
                          text-zinc-500 dark:text-zinc-300">

            {/* Replace with real grayscale client logos */}
            <div className="text-sm">Client A</div>
            <div className="text-sm">Client B</div>
            <div className="text-sm">Client C</div>
            <div className="text-sm">Client D</div>
            <div className="text-sm">Client E</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-zinc-200
                        dark:border-white/10 md:grid md:grid-cols-2 md:gap-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Find us</h2>
            <p className="text-zinc-600">
              We handle design, permitting, fabrication and installation across Middle Tennessee.
            </p>
            <p className="text-zinc-600">Map to shop and yard:</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ShopMap />
          </div>
        </div>
      </div>
    </section>
  );
}
