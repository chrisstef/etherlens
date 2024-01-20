import { Metadata } from "next";
import PageHeader from "../../_components/PageHeader";
import Shell from "../../_components/layout/Shell";
import UserDataTable from "../../_components/UserDataTable";

export const metadata: Metadata = {
    title: "User Data | GHO Lens",
    description: "Get a summary of your GHO portfolio.",
};

const UserDataPage = () => {
    return (
        <Shell>
            <PageHeader
                heading="User Data"
                text="Get as summary of your GHO portfolio."
            />
            <div className="grid grid-cols-1 gap-6">
                <UserDataTable />
            </div>
        </Shell>
    );
};

export default UserDataPage;
