"use client";

import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { SidebarContainer } from "./SidebarContainer";

export default function SidebarProviderContainer() {
  return (
    <SidebarProvider>
      <SidebarContainer />
      <SidebarTrigger />
    </SidebarProvider>
  );
}
