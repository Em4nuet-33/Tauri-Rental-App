import { useEffect, useState } from "react";
import { Map, useMap } from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { RotateCcw, Mountain } from "lucide-react";
import 'maplibre-gl/dist/maplibre-gl.css';

function MapController() {
  const { map, isLoaded } = useMap();
  const [pitch, setPitch] = useState(0);
  const [bearing, setBearing] = useState(0);

  useEffect(() => {
  if (!map || !isLoaded) return;

  const handleStyleLoad = () => {
    // Obtenemos el ID de la primera fuente disponible para no adivinar
    const sources = map.getStyle().sources;
    const sourceId = Object.keys(sources)[0]; // Usualmente es "carto" o "maptiler"

    if (!map.getLayer('3d-buildings')) {
      map.addLayer({
        'id': '3d-buildings',
        'source': sourceId, 
        'source-layer': 'building', // Capa estándar de OSM
        'type': 'fill-extrusion',
        'minzoom': 14,
        'paint': {
          'fill-extrusion-color': '#059669',
          'fill-extrusion-height': [
        'interpolate', ['linear'], ['zoom'],
         14, 0,
            15, ['*', ['coalesce', ['get', 'height'], 20], 1.5] // Multiplica x1.5 la altura real o usa 20m
         ],
        'fill-extrusion-base': ['coalesce', ['get', 'min_height'], 0],
        'fill-extrusion-opacity': 0.8
        }
      });
    }
  };

  // Si el estilo ya cargó, ejecutamos. Si no, esperamos al evento 'style.load'
  if (map.isStyleLoaded()) {
    handleStyleLoad();
  } else {
    map.on('style.load', handleStyleLoad);
  }

  // ... resto de tu lógica de handleMove
}, [map, isLoaded]);

  const handle3DView = () => {
    map?.easeTo({
      pitch: 60,
      bearing: -20,
      duration: 1000,
    });
  };

  const handleReset = () => {
    map?.easeTo({
      pitch: 0,
      bearing: 0,
      duration: 1000,
    });
  };

  if (!isLoaded) return null;

  return (
    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
      <div className="flex gap-2">
        <Button 
          size="sm" 
          variant="secondary" 
          className="bg-slate-900/80 border-slate-700 hover:bg-emerald-600 hover:text-white backdrop-blur-sm transition-all"
          onClick={handle3DView}
        >
          <Mountain className="mr-1.5 size-4" />
          3D View
        </Button>
        <Button 
          size="sm" 
          variant="secondary" 
          className="bg-slate-900/80 border-slate-700 hover:bg-slate-800 backdrop-blur-sm transition-all"
          onClick={handleReset}
        >
          <RotateCcw className="mr-1.5 size-4" />
          Reset
        </Button>
      </div>
      <div className="bg-slate-950/90 rounded-md border border-slate-800 px-3 py-2 font-mono text-[10px] text-emerald-500 backdrop-blur-md shadow-xl">
        <div>PITCH: {pitch}°</div>
        <div>BEARING: {bearing}°</div>
      </div>
    </div>
  );
}

export default function MapSection({ onMapClick }) {
  return (
    <div className="w-full h-full relative">
      <Map
        initialViewState={{
          longitude: -99.1332,
          latitude: 19.4326,
          zoom: 12
        }}
        // El estilo de CartoDB es genial, pero para edificios 3D 
        // a veces necesitas un estilo que incluya la capa 'building'
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        className="h-full w-full"
        onClick={onMapClick}
      >
        <MapController />
      </Map>
    </div>
  );
}