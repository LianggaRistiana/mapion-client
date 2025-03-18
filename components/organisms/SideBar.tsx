'use client';
import { List, Map, Plus, LogOut } from "lucide-react";


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import HeroTitle from "../atoms/HeroTitle";
import { ModeToggle } from "../atoms/ModeToggle";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Map,
  },
  {
    title: "Add Location",
    url: "/add-location",
    icon: Plus,
  },
  {
    title: "List Location",
    url: "/list-location",
    icon: List,
  },
];

export function AppSidebar() {
  const router = useRouter();
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <HeroTitle title="Mapion" className="text-2xl text-center mt-8 mb-12" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Mapion</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex flex-row justify-between">
        <ModeToggle />
        <Button variant="outline" size="icon" onClick={() => router.push("/")}>
          <LogOut />
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
