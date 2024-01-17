import { Metadata } from "next";
import DashboardHeader from "../../_components/dashboard-header";
import Shell from "../../_components/layout/Shell";
import HoldingsForm from "../../_components/holdings-form";

export const metadata: Metadata = {
    title: "Facilitators | GHO Lens",
    description: "Explore Transactions of the GHO Facilitators.",
};

const FacilitatorsPage = () => {
    const userAddress = "0x719bD84af4F2a08F3aa83037a3728cadE5A43c3F";

    return (
        <Shell>
            <DashboardHeader
                heading="Facilitators"
                text="Explore Transactions of the GHO Facilitators."
            />
            <div className="grid grid-cols-1 gap-6">
                <HoldingsForm userAddress={userAddress} />
            </div>
        </Shell>
    );
};

export default FacilitatorsPage;
