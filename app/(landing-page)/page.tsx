"use client";
import { HeroCard } from "@/components/molecules/HeroCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial value
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-4 md:gap-6 px-4">
      <HeroCard></HeroCard>
    </div>
  );
}
