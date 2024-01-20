import { Metadata } from "next";
import Shell from "../../_components/layout/Shell";
import DashboardHeader from "../../_components/dashboard-header";
import MarketsCards from "../../_components/MarketsCards";
import MarketsDataTable from "../../_components/MarketsDataTable";

export const metadata: Metadata = {
    title: "Aave Markets | GHO Lens",
    description:
        "Analyze the overall statistics and market-specifics within the Aave markets.",
};

const MarketsPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Aave Markets"
                text="Analyze the overall statistics and market-specifics within the Aave markets."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                <MarketsCards />
                <MarketsDataTable />
            </div>
        </Shell>
    );
};

export default MarketsPage;
