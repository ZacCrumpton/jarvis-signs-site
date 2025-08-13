import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { ADDRESS, MAP_CENTER, MAP_ZOOM } from "../lib/site";

export default function ShopMap() {
  const divRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!key) {
      setFailed(true);
      return;
    }

    const loader = new Loader({
      apiKey: key,
      version: "weekly",
    });

    let map;

    loader
      .importLibrary("maps")
      .then(({ Map }) => {
        map = new Map(divRef.current, {
          center: MAP_CENTER,
          zoom: MAP_ZOOM,
          mapId: "DEMO_MAP", // optional: create a real mapId in Cloud Console for styling
          gestureHandling: "greedy",
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        });
        return loader.importLibrary("marker");
      })
      .then(({ AdvancedMarkerElement }) => {
        new AdvancedMarkerElement({
          map,
          position: MAP_CENTER,
          title: "Jarvis Signs",
        });
      })
      .catch(() => setFailed(true));

    return () => {
      // cleanup not strictly needed for this simple component
    };
  }, []);

  if (failed) {
    const q = encodeURIComponent(ADDRESS);
    return (
      <iframe
        title="Shop location"
        className="h-80 w-full rounded-2xl border border-white/10 dark:[filter:grayscale(15%)_brightness(.88)_contrast(1.05)]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${q}&output=embed`}
      />
    );
  }

  return <div ref={divRef} className="h-80 w-full rounded-2xl border" />;
}
