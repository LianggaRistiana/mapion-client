"use client";
import { ModeToggle } from "@/components/atoms/ModeToggle";
import { ChatBotModal } from "@/components/molecules/ChatBotModal";
import { HeroCard } from "@/components/molecules/HeroCard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-y-4 md:gap-6 px-4">
      <HeroCard></HeroCard>
      <div className="flex flex-row items-center gap-4">
        <ModeToggle></ModeToggle>
        <ChatBotModal></ChatBotModal>
      </div>
    </div>
  );
}
