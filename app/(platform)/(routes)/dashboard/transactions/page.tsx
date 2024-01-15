import { Metadata } from "next";
import DashboardHeader from "../../_components/dashboard-header";
import Shell from "../../_components/layout/Shell";

export const metadata: Metadata = {
    title: "Transactions | GHO Lens",
    description: "Analyze GHO token transactions over time.",
};

const TransactionsPage = () => {
    return (
        <Shell>
            <DashboardHeader
                heading="Transactions"
                text="Analyze GHO token transactions with real-time insights."
            />
            <div className="grid grid-cols-1 gap-6">Transactions</div>
        </Shell>
    );
};

export default TransactionsPage;
