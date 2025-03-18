"use client";

import HeroTitle from "@/components/atoms/HeroTitle";
import { AddLocationForm } from "@/components/molecules/AddLocationForm";
import dynamic from "next/dynamic";
import { useState } from "react";

const Map = dynamic(() => import("@/components/organisms/Map"), { ssr: false });

export default function AddLocation() {
  const [selectedLocation, setSelectedLocation] = useState<[number, number]>([
    0, 0,
  ]);

  return (
    <div className="mt-8">
      <HeroTitle
        title="Add Location"
        className="text-2xl text-center mt-8 mb-12"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="ml-8 w-full md:w-[40vw] h-[50vh] relative z-0 border-2 border-sidebar-foreground rounded-lg overflow-hidden">
          <Map
            addMode={true}
            onSelectedLocation={(location) =>
              setSelectedLocation(location ?? selectedLocation)
            }
          />
        </div>
        <div className="ml-8 w-full md:w-[30vw] relative z-0 overflow-hidden">
          <AddLocationForm latlng={selectedLocation} />
        </div>
      </div>
    </div>
  );
}
