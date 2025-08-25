import { motion } from "framer-motion";

export default function WaveHero({ image, title, subtitle }) {
  return (
    <section className="relative isolate">
      <img
        src={image}
        alt={title}
        className="h-[55vh] w-full object-cover md:h-[65vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-10 flex justify-center px-4 text-center text-white">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-lg text-zinc-200"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Curved white “frame” in bottom-right */}
     
    </section>
  );
}
