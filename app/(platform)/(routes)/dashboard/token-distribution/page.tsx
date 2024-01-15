import React from "react";
import Shell from "../../_components/layout/Shell";
import DashboardHeader from "../../_components/dashboard-header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Token Distribution | GHO Lens",
    description: "Visualize GHO token distribution among addresses.",
};
const DistributionPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Token Distribution"
                text="Visualize GHO token distribution among addresses."
            />
            <div className="grid grid-cols-1 gap-6">Token Distribution</div>
        </Shell>
    );
};

export default DistributionPage;
