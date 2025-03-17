import HeroTitle from "@/components/atoms/HeroTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HeroTitle title="Mapion" className="text-6xl text-center" />
    </div>
  );
}