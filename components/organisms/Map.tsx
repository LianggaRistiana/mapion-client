import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { useMapEvents } from "react-leaflet";

interface MapProps {
  addMode?: boolean;
  locations?: Location[];
  center?: [number, number];
  onSelectedLocation?: (location?: [number, number]) => void;
}

type Location = {
  id: number;
  created_at: string;
  title: string;
  desc: string;
  lat: number;
  lng: number;
};

export default function Map({ addMode, locations, center, onSelectedLocation }: MapProps) {
  const [clickedPosition, setClickedPosition] = useState<
    [number, number] | null
  >(null);

  const icon = new Icon({
    iconUrl: "/marker.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer
      center={center || [-7.6079, 110.2038]}
      zoom={15}
      zoomControl={false}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      {/* Komponen untuk memperbarui center */}
      <MapView center={center} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Render marker berdasarkan data locations */}
      {locations?.map((location) => (
        <Marker
          key={`${location.lat}-${location.lng}-${crypto.randomUUID()}`}
          position={[location.lat, location.lng]}
          icon={icon}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-lg">{location.title}</h3>
              <p className="text-sm">{location.desc}</p>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Mode menambah marker dengan klik di peta */}
      {addMode && <ClickHandler setClickedPosition={setClickedPosition} onSelectedLocation={onSelectedLocation}/>}
      {clickedPosition && (
        <Marker position={clickedPosition} icon={icon}>
          <Popup>
            Koordinat: {clickedPosition[0].toFixed(6)},{" "}
            {clickedPosition[1].toFixed(6)}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

function MapView({ center }: { center?: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo(center, map.getZoom(), {
        animate: true,
        duration: 1.5,
      });
    }
  }, [center, map]);

  return null;
}

function ClickHandler({
  setClickedPosition,
  onSelectedLocation,
}: {
  setClickedPosition: (pos: [number, number]) => void;
  onSelectedLocation?: (pos?: [number, number]) => void;
}) {
  useMapEvents({
    click: (e) => {
      setClickedPosition([e.latlng.lat, e.latlng.lng]);
      onSelectedLocation?.([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}
