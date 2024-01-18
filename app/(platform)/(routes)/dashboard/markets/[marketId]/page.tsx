import React from "react";
import Shell from "../../../_components/layout/Shell";
import DashboardHeader from "../../../_components/dashboard-header";

const MarketDetailsPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Markets Data"
                text="Visualize data for each Reserve in an Aave market."
            />
            <div className="grid grid-cols-1 gap-6">MarketDetailsPage</div>
        </Shell>
    );
};

export default MarketDetailsPage;
