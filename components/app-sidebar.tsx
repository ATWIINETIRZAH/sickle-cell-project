
"use client";

import * as React from "react";
import {
  Settings2,
  CalendarClock,
  LayoutDashboard,
  UserPen,
  TrendingUpDown,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Tirzah",
    email: "tirzahatwiine5@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      title: "Patients",
      url: "/dashboard/patients",
      icon: UserPen,
    },
    {
      title: "Predictions",
      url: "/predictions",
      icon: TrendingUpDown,
    },
    {
      title: "Appointments",
      url: "/dashboard/appointments",
      icon: CalendarClock,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <h1>Sickle Cell Management</h1>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
