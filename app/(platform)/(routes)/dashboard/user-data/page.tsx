import { Metadata } from "next";
import DashboardHeader from "../../_components/dashboard-header";
import Shell from "../../_components/layout/Shell";
import UserDataTable from "../../_components/UserDataTable";
import HoldingsForm from "../../_components/holdings-form";

export const metadata: Metadata = {
    title: "User Data | GHO Lens",
    description: "Get a summary of your Aave portfolio.",
};

const UserDataPage = () => {
    const userAddress = "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c";

    return (
        <Shell>
            <DashboardHeader
                heading="User Data"
                text="Get as summary of your Aave portfolio."
            />
            <div className="grid grid-cols-1 gap-6">
                <UserDataTable userAddress={userAddress} />
                {/* <HoldingsForm userAddress={userAddress} /> */}
            </div>
        </Shell>
    );
};

export default UserDataPage;
