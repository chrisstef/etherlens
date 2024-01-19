import React from "react";
import Shell from "../../_components/layout/Shell";
import DashboardHeader from "../../_components/dashboard-header";
import { Metadata } from "next";
import MarketsCards from "../../_components/MarketsCards";
import MarketsDataTable from "../../_components/MarketsDataTable";

export const metadata: Metadata = {
    title: "Markets | GHO Lens",
    description: "Visualize data for each Reserve in an Aave market.",
};
const MarketsPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Markets Data"
                text="Visualize data for each Reserve in an Aave market."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                <MarketsCards />
                <MarketsDataTable />
            </div>
        </Shell>
    );
};

export default MarketsPage;
