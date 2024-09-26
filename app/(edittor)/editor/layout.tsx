import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { dashboardConfig } from "@/config/dashboard";
import DashboardNav from "@/components/dashboard-nav";


export default function EditorLayout ({

    children ,
}:{
    children : React.ReactNode
}){
    return (
        <div className="flex min-h-screen flex-col space-y-6 mx-4">
            <header className="sticky top-8 z-40 border-b bg-background">
                <div className="container flex items-center justify-between py-2">
                    <MainNav items={dashboardConfig.mainNav}/>
                </div>
            </header>
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] py-2">
                <aside className="hidden md:flex w-[200px] flex-col">
                    <DashboardNav items={dashboardConfig.sidebarNav} />
                </aside>
                <main className="flex flex-col w-full flex-1 overflow-hidden"> { children } </main>
            </div>
            <SiteFooter/>
        </div>
    )
}