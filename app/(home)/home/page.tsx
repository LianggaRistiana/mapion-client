"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/organisms/Map"), { ssr: false });
import { useEffect, useState } from "react";

type Location = {
  id: number;
  created_at: string;
  title: string;
  desc: string;
  lat: number;
  lng: number;
};

export default function Home() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
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
    <>
      <div className="mt-8 absolute inset-0 z-0">
        <Map locations={locations}/>
      </div>
    </>
  );
}
