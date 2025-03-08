"use client";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { useUser } from "./context/user-provider";
import { Suspense, useEffect, useState } from "react";
import { Breeds } from "@/lib/definitions";
import { getAllBreeds } from "@/lib/api";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://avatar.iran.liara.run/public",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { providerUser } = useUser();
  const [breeds, setBreeds] = useState<Breeds>([]);

  const displayUser = providerUser
    ? { ...providerUser, avatar: "https://avatar.iran.liara.run/public" }
    : data.user;

  useEffect(() => {
    const getBreeds = async () => {
      try {
        const response = await getAllBreeds();

        if (response) {
          setBreeds(response);
        }

        throw new Error("Error calling API getAllBreeds");
      } catch (error) {
        console.log(error);
      }
    };

    getBreeds();
  }, []);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className=" text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center">
                  <img src="/favicon.ico" alt="icon" className="size-8" />
                </div>
                <div className="flex flex-row gap-0 leading-none ml-0.5">
                  <span className="font-bold text-2xl font-sans">Paw</span>
                  <span className="font-bold text-2xl font-sans text-[#d99e82]">
                    Finder
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <Suspense>
          <NavMain breeds={breeds} />
        </Suspense>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <NavUser user={displayUser} />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
