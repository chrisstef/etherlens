"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";
import { dashboardLinks } from "@/config/links";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isConnected, isConnecting } = useAccount();
    const router = useRouter();

    useEffect(() => {
        if (!isConnected && !isConnecting) {
            router.replace("/");
        }
    }, [isConnected, isConnecting, router]);

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <Navbar />
            <div className=" grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[250px] flex-col md:flex">
                    <Sidebar items={dashboardLinks.data} />
                </aside>
                <main className="flex w-full flex-1 flex-col">{children}</main>
            </div>
        </div>
    );
}
