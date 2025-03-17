"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import HeroTitle from "../atoms/HeroTitle";
import { useRouter } from "next/navigation";

export function HeroCard() {
  const router = useRouter();

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <HeroTitle title="Mapion" className="text-6xl text-center" />
            <p className="text-center mt-2 text-muted-foreground ">
              Find the Place with Ease
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" onClick={() => router.push("/register")}>
          Register
        </Button>
        <Button className="flex-1" onClick={() => router.push("/login")}>
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
