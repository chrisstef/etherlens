import { Metadata } from "next";
import Shell from "../../../_components/layout/Shell";
import DashboardHeader from "../../../_components/dashboard-header";
import MarketDetails from "../../../_components/MarketDetails";

export const metadata: Metadata = {
    title: "Market Details | GHO Lens",
    description: "Visualize data for a specific Reserve in an Aave market.",
};

const MarketDetailsPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Markets Data"
                text="Visualize data for a specific Reserve in an Aave market."
            />
            <div className="grid grid-cols-1 gap-6">
                {" "}
                <MarketDetails />
            </div>
        </Shell>
    );
};

export default MarketDetailsPage;
