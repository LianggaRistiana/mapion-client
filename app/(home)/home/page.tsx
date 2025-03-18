"use client";
import HeroTitle from "@/components/atoms/HeroTitle";
import Map from "@/components/organisms/Map";

export default function Home() {
  return (
    <>
      <div className="mt-8 absolute inset-0 z-0">
        <Map />
      </div>
    </>
  );
}
