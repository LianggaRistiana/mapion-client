"use client";
import HeroTitle from "@/components/atoms/HeroTitle";
import { LocationTable } from "@/components/molecules/LocationTable";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Map = dynamic(() => import("@/components/organisms/Map"), { ssr: false });

type Location = {
  id: number;
  created_at: string;
  title: string;
  desc: string;
  lat: number;
  lng: number;
};

export default function ListLocation() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [center, setCenter] = useState<[number, number]>([-8.796252651578675, 115.17631015244557]);

  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await fetch("/api/location"); // Panggil API
        if (!res.ok) throw new Error("Failed to fetch locations");

        const data: Location[] = await res.json();
        setLocations(data);
      } catch (err) {
        setError((err as Error).message);
        console.error("[fetchLocations] Error fetching locations:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchLocations();
  }, []);
  
  return (
    <div className="mt-8">
      <HeroTitle
        title="List Location"
        className="text-2xl text-center mt-8 mb-12"
      />

      <div className="grid grid-cols-1 gap-4 md:gap-32 md:grid-cols-2">
        <div className="ml-8 w-full md:w-[40vw] h-[50vh] relative z-0 border-2 border-sidebar-foreground rounded-lg overflow-hidden">
          <Map addMode={false} locations={locations} center={center}/>
        </div>
        <div className="ml-8 w-full md:w-[30vw] relative z-0 rounded-lg overflow-hidden">
          <LocationTable locations={locations} onRowClick={(location) => setCenter([location.lat, location.lng])}></LocationTable>
        </div>
      </div>
    </div>
  );
}
