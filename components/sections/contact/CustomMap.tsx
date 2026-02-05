"use client";

import { Map, MapControls, MapMarker, MarkerContent, MarkerLabel } from "@/components/ui/map";

export default function CustomMap() {
    // Cagayan de Oro City Coordinates
    const center: [number, number] = [124.598469, 8.486081];

    return (
        <Map
            center={center}
            zoom={13}
            theme="dark"
            className="w-full h-full"
        >
            <MapControls showZoom={true} showCompass={true} position="top-right" />

            <MapMarker longitude={center[0]} latitude={center[1]}>
                <MarkerContent>
                    <div className="relative flex items-center justify-center">
                        {/* Recursive Pulse Effect */}
                        <div className="absolute w-12 h-12 bg-white/20 rounded-full animate-ping" />
                        <div className="absolute w-8 h-8 bg-white/40 rounded-full animate-pulse" />

                        {/* Main Marker Dot */}
                        <div className="relative w-4 h-4 bg-white border-2 border-black rotate-45 flex items-center justify-center">
                            <div className="w-1 h-1 bg-black" />
                        </div>
                    </div>
                </MarkerContent>
                <MarkerLabel className="font-mono text-[10px] text-white bg-black/80 px-2 py-1 border border-white/20 mt-4 backdrop-blur-sm">
                    CDO_STATION_01
                </MarkerLabel>
            </MapMarker>
        </Map>
    );
}
