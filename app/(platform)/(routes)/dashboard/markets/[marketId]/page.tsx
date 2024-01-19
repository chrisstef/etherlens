import Shell from "../../../_components/layout/Shell";
import DashboardHeader from "../../../_components/dashboard-header";
import MarketDetails from "../../../_components/MarketDetails";

type MarketDetailsProps = {
    name: string;
};

const MarketDetailsPage: React.FC<MarketDetailsProps> = ({ name }) => {
    return (
        <Shell>
            <DashboardHeader
                heading="Markets Data"
                text={`Visualize data for ${name} in an Aave market.`}
            />
            <div className="grid grid-cols-1 gap-6">
                <MarketDetails />
            </div>
        </Shell>
    );
};

export default MarketDetailsPage;
