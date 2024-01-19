import { Metadata } from "next";
import DashboardHeader from "../../_components/dashboard-header";
import Shell from "../../_components/layout/Shell";
import FacilitatorsDataTable from "../../_components/FacilitatorsDataTable";

export const metadata: Metadata = {
    title: "Facilitators | GHO Lens",
    description: "Explore key metrics of the GHO Facilitators.",
};

const FacilitatorsPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Facilitators"
                text="Explore key metrics of the GHO Facilitators."
            />
            <div className="grid grid-cols-1 gap-6">
                <FacilitatorsDataTable />
            </div>
        </Shell>
    );
};

export default FacilitatorsPage;
