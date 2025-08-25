// src/pages/Work.jsx
import { useMemo, useState, useEffect } from "react";
import WaveHero from "../components/WaveHero";
import ThumbStrip from "../components/ThumbStrip";
import TwoColFeature from "../components/TwoColFeature";
import DarkSplitInfo from "../components/DarkSplitInfo";
import CardCarousel from "../components/CardCarousel";
import Lightbox from "../components/Lightbox";
import { image } from "framer-motion/client";

// Content to show per filter selection
const CONTENT_BY_TYPE = {
  all: {
    hero: {
      image: "/work/NADC_ChannelLetters.jpg",
      title: "Our Work",
      subtitle: "Browse channel letters, monuments, wraps & more.",
    },
    dark: {
      title: "Full-service signage",
      lead:
        "From design and permitting to fabrication and install—we handle the entire process in-house for consistent quality and faster turnarounds.",
      more: [
        "Fabrication in aluminum, acrylic, vinyl, steel, and composites.",
        "Lighting options include front-lit, halo-lit, and retrofits.",
        "Site surveys, landlord/city submittals, and stamped drawings.",
      ],
      image: "/work/bridgestone_Cabinet.jpg",
    },
    twoCol:{
      kicker: "Services",
      title: "SIGN PROGRAMS",
      copy:
        "Design, engineering, permitting, fabrication, and install-coordinated start to finish. We'll align to brand, code, and timeline so the result looks right and lasts.",
      images: "/work/pinnacle_Vinyl-ChannelLetters.jpg",
    }
  },

  "channel letters": {
    hero: {
      image: "/work/NADC_ChannelLetters.jpg",
      title: "Channel Letters",
      subtitle: "A bold, durable option for storefronts, campuses, and venues.",
    },
    dark: {
      title: "What are Channel Letter Signs?",
      lead:
        "Individually fabricated letters with aluminum returns and acrylic faces. Available front-lit or halo-lit for day-night visibility.",
      more: [
        "Raceway, stud, or flush mounting to match your facade.",
        "High-efficiency LED modules and clean wiring.",
        "Landlord spec and code-compliant designs.",
      ],
      image: "/work/nashvilleYards_Day.jpg",
    },
    twoCol:{
      kicker: "Signs",
      title: "CHANNEL LETTERS",
      copy: 
        "Three-dimensional letters or logos, illuminated or non-illuminated. we Fabricate in aluminum, offer front-lit and reverse/halo lighting, and multiple mounting options",
      image:"/work/baristaParlor_ChannelLetters-Custom.jpg",
    },
  },

  monument: {
    hero: {
      image: "/work/riverLanding_Monument.jpg",
      title: "Monument Signs",
      subtitle: "Freestanding entrance markers engineered for longevity.",
    },
    dark: {
      title: "What is a Monument Sign?",
      lead:
        "Low-profile, permanent site identity. Routed faces, push-thru letters, or dimensional logos—lit or non-lit to fit brand and code.",
      more: [
        "Engineered structures for wind, weather, and footing requirements.",
        "Serviceable faces and tenant panels for multi-tenant sites.",
        "Premium finishes to match architectural materials.",
      ],
      image: "/work/drHorton_Monument.jpg",
    },
    twoCol:{
      kicker: "Signs",
      title: "MONUMENTS",
      copy:
        "Custom structures with internal frames and long-life finishes. Single or mult-tenant, lit or non-lit, matched to your site plan and brand",
      image:"/work/emblemPark_Monument.jpg",
    },
  },

  "wall wrap": {
    hero: {
      image: "/work/wcw_WallWrap.jpg",
      title: "Wall Wraps",
      subtitle: "Transform interior or exterior spaces fast with full-coverage vinyl.",
    },
    dark: {
      title: "What is a Wall Wrap?",
      lead:
        "Large-format, laminated vinyl designed for durability and color accuracy. Options for smooth or textured surfaces.",
      more: [
        "Cast or calendared films matched to your surface.",
        "Protective laminates for UV and scuff resistance.",
        "Removable or permanent adhesives as needed.",
      ],
      image: "/work/wcw_WallWrap.jpg",
    },
    twoCol:{
      kicker: "GRAPHICS",
      title: "WALL WRAPS",
      copy:
      "Design, print, and install0clean seams, color consistency, and surface-matched materials. Great for brand moments, and wayfinding.",
      image: "/work/wcw_WallWrap.jpg",
    },
  },
};


export default function Work() {
  // Lightbox state for full gallery cycling
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [selectedType]);

  // ——— assets ———
const { hero, dark, twoCol } =
  CONTENT_BY_TYPE[selectedType] || CONTENT_BY_TYPE.all;


  // Use the same files for thumbs & gallery (or provide separate low-res thumbs)
  const gallery = [
    { src: "/work/tnShine_falseNeon.jpg", caption: "Custom cabinet with neon accent", tags:{ type:["monument"] } },
    { src: "/work/riverLanding_Monument.jpg", caption: "Custom monument with waterfall", tags:{ type:["monument"] } },
    { src: "/work/pinnacle_Vinyl-ChannelLetters.jpg", caption: "Window wrap + channel letters (Pinnacle)", tags:{ type:["channel letters"] } },
    { src: "/work/nashvilleYards_Day.jpg", caption: "Channel letters at scale", tags:{ type:["channel letters"] } },
    { src: "/work/wcw_WallWrap.jpg", caption: "3M 180c vinyl on drywall", tags:{ type:["wall wrap"] } },
    { src: "/work/tsu_Scoreboard.jpg", caption: "Scoreboard LED with framing", tags:{ type:["LED"] } },
    { src: "/work/emblemPark_Monument.jpg", caption: "Cabinet with night lighting", tags:{ type:["channel letters"] } },
    { src: "/work/bridgestone_Cabinet.jpg", caption: "Cabinet + channel letters + LEDs", tags:{ type:["channel letters"] } },
    { src: "/work/beazer_billboard.jpg", caption: "Billboard application", tags:{ type:["billboard"] } },
    { src: "/work/NADC_ChannelLetters.jpg", caption: "Channel Letters for NADC", tags:{ type:["channel letters"] } },
    { src: "/work/baristaParlor_ChannelLetters-Custom.jpg", caption: "Channel Letters for Barista Parlor sporting a customer business sign", tags:{ type:["channel letters"] } },
    { src: "/work/drHorton_Monument.jpg", caption: "Custom Monument build with patena", tags:{ type:["monument"] } },
  ];

  

  const TYPE_CHIPS = [
    { label: "ALL", value: "all"},
    { label: "Channel Letters", value: "channel letters"},
    { label: "Monuments", value: "monument"},
    { label: "Wall Wraps", value: "wall wrap"}
  ];

  //NEW: derive filtered gallery from local state
    const filteredGallery = useMemo(() => {
      if (selectedType === "all") return gallery;
      return gallery.filter(
        (g) => Array.isArray(g.tags?.type) && g.tags.type.includes(selectedType)
      );
    }, [selectedType, gallery]);

  const thumbs = filteredGallery.map((g) => g.src);

  const rightImg = "/work/baristaParlor_ChannelLetters-Custom.jpg";

  const options = [
    {
      image: "/work/options/billboard.jpg",
      title: "Billboard Signs",
      copy: "High-visibility placements for maximum reach. Design, permitting, and placement strategy.",
    },
    {
      image: "/work/options/business.jpg",
      title: "Business Signs",
      copy: "Monuments, pylons, and storefront systems tailored to your site and brand.",
    },
  ];

  // Open gallery at a specific index (thumb clicks use this)
  const openGallery = (start = 0) => {
    setLbIndex(start);
    setLbOpen(true);
  };

  return (
    <>
    {/*NEW: Tiny chip bar, no routing/URL-Just local state */}
    <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-wrap gap-2">
        {TYPE_CHIPS.map((chip) => {
          const active = 
            chip.value === "all"
              ? selectedType === "all"
              : selectedType === chip.value;
            return (
              <button
                key={chip.value}
                onClick={() => setSelectedType(chip.value)}
                className={[
                    "px-3 py-1.5 rounded-full text-sm border transition",
                    active ? "bg-zinc-900 text-white border-zinc-900" : "hover:bg-zinc-100"
                ].join(" ")}
                aria-pressed={active}
              >
                {chip.label}
              </button>
            )
        })}
      </div>
    </div>
      <WaveHero
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="mx-auto max-w-7xl px-4">
        {twoCol && (
          <TwoColFeature
          kicker={twoCol.kicker}
          title={twoCol.title}
          copy={twoCol.copy}
          image={twoCol.image}
        />
        )}
      </section>

      {/* Horizontal thumb strip (conditional empty state) */}
      {filteredGallery.length > 0 ? (
        <ThumbStrip images={thumbs} onOpen={openGallery} />
      ) : (
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600">
          No {hero.title.toLowerCase()} in the gallery yet — check back soon.
        </div>
      )}


      <DarkSplitInfo
        title={dark.title}
        lead={dark.lead}
        more={dark.more}
        image={dark.image}
        onOpenGallery={() => openGallery(0)}
      />

      <CardCarousel items={options} />

      {/* Full gallery lightbox with cycling (← → Esc) */}
      <Lightbox
        isOpen={lbOpen}
        items={filteredGallery}
        index={lbIndex}
        onIndexChange={setLbIndex}
        onClose={() => setLbOpen(false)}
      />
    </>
  );
}
