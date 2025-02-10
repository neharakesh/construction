import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet"; // Import Leaflet for heatmap
import "leaflet/dist/leaflet.css";
import "leaflet.heat"; // Import leaflet.heat for heatmaps

const HeatMapLayer = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    const heatData = locations.map((loc) => [loc.lat, loc.lng, loc.intensity]);

    const heatLayer = L.heatLayer(heatData, { 
      radius: 40, 
      blur: 25, 
      maxZoom: 12,
      gradient: { 0.2: "blue", 0.5: "yellow", 1.0: "red" }, // Color gradient
    });

    heatLayer.addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [locations, map]);

  return null;
};

const HeatMap = () => {
  const locations = [
    { lat: 25.2361, lng: 79.1874, intensity: 0.8 }, // Mauranipur (AR Construction)
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <MapContainer
        center={[22, 80]} // Center on India
        zoom={5}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <HeatMapLayer locations={locations} />
      </MapContainer>
    </div>
  );
};

export default HeatMap;
