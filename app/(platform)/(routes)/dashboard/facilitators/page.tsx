import { Metadata } from "next";
import PageHeader from "../../_components/PageHeader";
import Shell from "../../_components/layout/Shell";
import FacilitatorsDataTable from "../../_components/FacilitatorsDataTable";

export const metadata: Metadata = {
    title: "Facilitators | GHO Lens",
    description:
        "Explore Facilitators: Mint and Burn GHO tokens up to a specified threshold.",
};

const FacilitatorsPage = () => {
    return (
        <Shell>
            <PageHeader
                heading="Facilitators"
                text="Explore Facilitators: Mint and Burn GHO tokens up to a specified threshold."
            />
            <div className="grid grid-cols-1 gap-6">
                <FacilitatorsDataTable />
            </div>
        </Shell>
    );
};

export default FacilitatorsPage;
