"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import NextTopLoader from "nextjs-toploader";
import { Navbar } from "./_components/layout/Navbar";
import { Sidebar } from "./_components/layout/Sidebar";
import { dashboardLinks } from "@/config/links";
import { Footer } from "./_components/layout/Footer";

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
        <>
            <NextTopLoader color="#AC8DF1" height={2.5} showSpinner={false} />
            <div className="flex min-h-screen flex-col space-y-6">
                <Navbar />
                <div className="grid flex-1 gap-20 md:grid-cols-[200px_1fr] md:px-8 px-2">
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
                <Footer />
            </div>
        </>
    );
}
