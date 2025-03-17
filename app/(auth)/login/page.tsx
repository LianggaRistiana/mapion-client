"use client";

import HeroTitle from "@/components/atoms/HeroTitle";
import { ModeToggle } from "@/components/atoms/ModeToggle";
import { LoginFormCard } from "@/components/molecules/LoginFormCard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-4 md:gap-6 px-4">
      {/* <HeroTitle title="Login" className="text-6xl text-center" /> */}
      <LoginFormCard />
      <ModeToggle />
    </div>
  );
}
