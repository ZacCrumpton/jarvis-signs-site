import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

export default function WorkGrid({ items }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(null);

    const handleOpen = (item) => {
        setActive(item);
        setOpen(true);
    };

    return (
        <section className="min-h-screen bg-white text-zinc-900 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Work</h1>
                    <p className="mt-3 text-zinc-600">A snapshot of recent installs and fabrications.</p>
                </header>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {items.map((item, i) => (
                        <motion.button
                            key={i}
                            type="button"
                            intial={{ opacity: 0, y:20 }}
                            whileInView={{ opacity: 1, y:0 }}
                            viewport={{ delay: i * 0.06 }}
                            onClick={() => handleOpen(item)}
                            className="group relative overflow-hidden rounded-xl bg-zinc-100 shadow-sm"
                        >

                            <img
                                src={item.src}
                                alt={item.alt || 'Project ${i + i}'}
                                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {item.caption && (
                                <div className="absolute inset-x-0 bottom-0 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <div className="m-3 rounded-lg bg-black/60 px-3 py-2 text-sm text-white">
                                        {item.caption}
                                    </div>
                                </div>
                            )}

                        </motion.button>
                    ))}
                </div>
            </div>
            <Lightbox
            isOpen={open}
            src={active?.src}
            alt={active?.alt}
            onClose={() => setOpen(false)}
            />
        </section>
    );
}