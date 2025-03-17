"use client";

import HeroTitle from "@/components/atoms/HeroTitle";
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
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-y-2 md:gap-6 px-4">
      <HeroTitle title="Mapion" className="text-6xl text-center md:text-left" />
    </div>
  );
}
