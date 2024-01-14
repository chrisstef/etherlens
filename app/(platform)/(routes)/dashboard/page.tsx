import Shell from "../_components/layout/Shell";
import DashboardHeader from "../_components/dashboard-header";
import DashboardCards from "../_components/dashboard-cards";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | GHO Lens",
    description:
        "Get a snapshot of GHO token activity with real-time insights.",
};

export default function Dashboard() {
    return (
        <Shell>
            <DashboardHeader
                heading="Explore the GHO Ecosystem"
                text="Get a snapshot of GHO token activity with real-time insights."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                <DashboardCards />
            </div>
        </Shell>
    );
}
