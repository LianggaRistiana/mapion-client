import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { useMapEvents } from "react-leaflet";


interface MapProps {
  addMode?: boolean;
}



export default function Map( props: MapProps) {
  const icon = new Icon({
    iconUrl: "/marker.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const [clickedPosition, setClickedPosition] = useState<
    [number, number] | null
  >(null);

  return (
    <MapContainer
      className=""
      center={[-8.796252651578675, 115.17631015244557]}
      zoom={15}
      zoomControl={false}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-8.796252651578675, 115.17631015244557]} icon={icon}>
        <Popup>
          <div className="text-center">
            <h3 className="font-bold text-lg">Bali, Indonesia</h3>
            <p className="text-sm">Jalan Raya Kuta, Badung, Bali</p>
          </div>
        </Popup>
      </Marker>

      {props.addMode && <ClickHandler setClickedPosition={setClickedPosition} />}
      {clickedPosition && (
        <Marker position={clickedPosition} icon={customIcon}>
          <Popup>
            Koordinat: {clickedPosition[0].toFixed(6)},{" "}
            {clickedPosition[1].toFixed(6)}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

// Komponen untuk menangani klik di peta
function ClickHandler({
  setClickedPosition,
}: {
  setClickedPosition: (pos: [number, number]) => void;
}) {
  useMapEvents({
    click: (e) => {
      setClickedPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

// Custom icon untuk marker
const customIcon = new Icon({
  iconUrl: "/marker.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
