import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/organisms/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger />
        <main>{children}</main>
      </SidebarInset>
      {/* <main>
        <SidebarTrigger />
        {children}
      </main> */}
    </SidebarProvider>
  );
}
