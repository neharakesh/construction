import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet"; 
import "leaflet/dist/leaflet.css";
import "leaflet.heat"; 

const HeatMapLayer = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    const heatData = locations.map((loc) => [loc.lat, loc.lng, loc.intensity]);

    const heatLayer = L.heatLayer(heatData, { 
      radius: 100, 
      blur: 25, 
      maxZoom: 50,
      gradient: { 0.2: "#1e3a8a", 0.5: "#facc15", 1.0: "#dc2626" }, // Blue to yellow to red gradient
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
    { lat: 25.2361, lng: 79.1874, intensity: 0.8, name: "Mauranipur (AR Construction)" },
  ];

  return (
    <div className="flex flex-col h-screen  text-white p-4">
      
      <div className="rounded-lg overflow-hidden shadow-lg border-4 border-gray-700">
        <MapContainer
          center={[22, 80]} 
          zoom={5}
          style={{ height: "80vh", width: "100%" }}
          scrollWheelZoom={false}
          className="rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          <HeatMapLayer locations={locations} />
          {locations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default HeatMap;

