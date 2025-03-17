import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const icon = new Icon({
    iconUrl: "/marker.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer
      center={[-8.796252651578675, 115.17631015244557]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-8.796252651578675, 115.17631015244557]} icon={icon}>
        <Popup>Universitas Udayana-Teknologi Informasi</Popup>
      </Marker>
    </MapContainer>
  );
}
