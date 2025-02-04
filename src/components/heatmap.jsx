import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet"; // Import Leaflet directly for heatmap
import "leaflet/dist/leaflet.css";
import "leaflet.heat"; // Import leaflet.heat

const HeatMapLayer = ({ cityData }) => {
  const map = useMap();

  useEffect(() => {
    const heatData = cityData.map((city) => [
      city[0], // Latitude
      city[1], // Longitude
      city[2], // Intensity
    ]);

    const heatLayer = L.heatLayer(heatData, { 
      radius: 15, 
      blur: 10, 
      maxZoom: 2,
      gradient: { 0.5: "yellow"}, // Custom gradient for better contrast
    });
    heatLayer.addTo(map);

    return () => {
      map.removeLayer(heatLayer); // Cleanup the heatmap layer on component unmount
    };
  }, [cityData, map]);

  return null;
};

const HeatMap = () => {
  // City data: [latitude, longitude, intensity]
  const cityData = [
    [25.4484, 78.5685, 0.6], // Jhansi
    [25.2019, 80.8322, 0.7], // Chitrakoot
  ];

  return (
    <div className="flex flex-col" style={{ height: "100vh", backgroundColor: "#f4f5f7" }}>
      
      <div className="flex-1 rounded-sm">
        <MapContainer
          center={[20.5937, 78.9629]} // Center on India
          zoom={5} // Fixed zoom level for India
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false} // Disable zooming with mouse scroll
          zoomControl={false} // Disable zoom controls
        >
          {/* Tile Layer for Grey Map */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" // Grey map style
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* HeatMap Layer */}
          <HeatMapLayer cityData={cityData} />
        </MapContainer>
      </div>
    </div>
  );
};

export default HeatMap;
