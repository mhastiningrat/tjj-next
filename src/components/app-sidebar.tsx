"use client"

import * as React from "react"
import {
  // AudioWaveform,
  BookOpen,
  // Bot,
  // Command,
  // Frame,
  // GalleryVerticalEnd,
  // Map,
  // PieChart,
  Settings2,
  // SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavDashboard } from "./nav-dashboard"

// This is sample data.
const data = {
  user: {
    name: "admin",
    email: "admin@gmial.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Tirta Jaya Jatiluhur",
      logo: "./images/logo.png",
      plan: "Logsheet",
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  dasboard:[{
    name: "Dashboard",
    url: "/dashboard",
    icon: BookOpen,
  },],
  navMain: [
    {
      title: "Operation & Maintenance",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Qualitas Intake",
          url: "qualitas-intake",
        },
        {
          title: "Intake Feed Pump",
          url: "#",
        },
        {
          title: "Dewatering",
          url: "#",
        },
        {
          title: "Chemical Room I",
          url: "#",
        },
        {
          title: "Chemical Room II",
          url: "#",
        },
        {
          title: "KOnsumsi Listrik dan Genset",
          url: "#",
        },
        {
          title: "Hydropaq Bawah (A)",
          url: "#",
        },
        {
          title: "Hydropaq Bawah (B)",
          url: "#",
        },
        {
          title: "Hydropaq Atas",
          url: "#",
        },
        {
          title: "Hydrofill",
          url: "#",
        },
        {
          title: "Distribusi",
          url: "#",
        },
        {
          title: "Offtaker",
          url: "#",
        },
        {
          title: "Logsheet Decanter",
          url: "#",
        },
        {
          title: "Kekeruhan Dan Chlorine",
          url: "#",
        },
      ],
    },
    {
      title: "Monitoring",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Quality",
          url: "#",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavDashboard dashboard={data.dasboard} />
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
