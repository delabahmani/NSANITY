"use client";

import {
  SidebarHeader,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronUp, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export function SidebarContainer() {
  const { status, data: session } = useSession();

  return (
    <Sidebar className="h-screen">
      <SidebarContent className="flex flex-col h-full">
        <SidebarHeader className="p-4">
          <h2 className="text-lg font-semibold">NSANITY</h2>
        </SidebarHeader>

        <SidebarGroup className="flex-grow"></SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {status === "authenticated" ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    {session?.user?.image ? (
                      <Image
                        src={session?.user?.image}
                        height={24}
                        width={24}
                        className="rounded-full"
                        alt="profile picture"
                      />
                    ) : (
                      <User2 />
                    )}
                    {session?.user?.name}
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Favorites</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => signOut()}>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <Link href={"/sign-up"}>
                      <User2 /> Sign in
                    </Link>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
              </DropdownMenu>
            )}

            {/* 
            // <DropdownMenu>
            //   <DropdownMenuTrigger asChild>
            //     <SidebarMenuButton>
            //       <User2 /> Username
            //       <ChevronUp className="ml-auto" />
            //     </SidebarMenuButton>
            //   </DropdownMenuTrigger> */}

            {/* </DropdownMenu> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
