"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { Navbar } from "./_components/layout/Navbar";
import { Sidebar } from "./_components/layout/Sidebar";
import { dashboardLinks } from "@/config/links";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isConnected } = useAccount();
    const router = useRouter();

    useEffect(() => {
        if (!isConnected) {
            router.replace("/");
        }
    }, [isConnected, router]);

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <Navbar />
            <div className="grid flex-1 gap-20 md:grid-cols-[200px_1fr] md:px-8 px-0">
                <aside className="hidden w-[250px] flex-col md:flex">
                    <Sidebar items={dashboardLinks.data} />
                </aside>
                <main className="flex w-full flex-1 flex-col">
                    <div
                        vaul-drawer-wrapper=""
                        className="flex min-h-screen flex-col bg-background"
                    >
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
