"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/organisms/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="mt-8 absolute inset-0 z-0">
        <Map />
      </div>
    </>
  );
}
