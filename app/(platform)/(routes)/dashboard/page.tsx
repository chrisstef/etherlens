import { Metadata } from "next";
import Shell from "../_components/layout/Shell";
import PageHeader from "../_components/PageHeader";
import DashboardCards from "../_components/DashboardCards";
import DashboardChart from "../_components/DashboardChart";

export const metadata: Metadata = {
    title: "Dashboard | GHO Lens",
    description: "Get a snapshot of the GHO Stablecoin and Aave.",
};

export default function Dashboard() {
    return (
        <Shell>
            <PageHeader
                heading="Explore the GHO Ecosystem"
                text="Get a snapshot of the GHO Stablecoin and Aave."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                <DashboardCards />
                <DashboardChart />
            </div>
        </Shell>
    );
}
