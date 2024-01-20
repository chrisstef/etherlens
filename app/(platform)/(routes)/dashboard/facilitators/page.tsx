import { Metadata } from "next";
import DashboardHeader from "../../_components/dashboard-header";
import Shell from "../../_components/layout/Shell";
import FacilitatorsDataTable from "../../_components/FacilitatorsDataTable";

export const metadata: Metadata = {
    title: "Facilitators | GHO Lens",
    description:
        "A Facilitator can trustlessly mint and burn GHO tokens up to a specified threshold.",
};

const FacilitatorsPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Facilitators"
                text="A Facilitator can trustlessly mint and burn GHO tokens up to a specified threshold."
            />
            <div className="grid grid-cols-1 gap-6">
                <FacilitatorsDataTable />
            </div>
        </Shell>
    );
};

export default FacilitatorsPage;
