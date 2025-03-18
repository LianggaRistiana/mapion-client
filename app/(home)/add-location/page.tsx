"use client";

import HeroTitle from "@/components/atoms/HeroTitle";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/organisms/Map"), { ssr: false });

export default function AddLocation() {
  return (
    <div className="mt-8">
      {/* <HeroTitle
        title="Add Location"
        className="text-2xl text-center mt-8 mb-12"
      /> */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="ml-8 w-full md:w-[40vw] h-[50vh] relative z-0 border-2 border-sidebar-foreground rounded-lg overflow-hidden">
          <Map addMode={true}/>
        </div>
        <div>
          <HeroTitle title="Add Location" className="text-2xl text-center" />
        </div>
      </div>
    </div>
  );
}
