"use client";
type MarketData = {
    name: string;
    symbol: string;
    totalLiquidityUSD?: string;
    totalDebtUSD?: string;
    variableBorrowAPR?: string;
    stableBorrowAPR?: string;
    liquidityRate?: string;
    // Add more properties as needed
};

// Your MarketDetails component
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useAaveData from "@/hooks/useAaveData";

const MarketDetails = () => {
    const { formattedReserves, isLoading } = useAaveData();
    const searchParams = useSearchParams();
    const [marketData, setMarketData] = useState<MarketData | null>(null);

    const index = searchParams.get("index");

    useEffect(() => {
        if (!isLoading) {
            setMarketData(formattedReserves[Number(index)]);
        }
    }, [isLoading]);

    return (
        <div className="container mx-auto p-4">
            {isLoading && <p>Querying smart contracts...</p>}
            {marketData && (
                <div className="bg-white rounded p-4 shadow">
                    <h2 className="text-2xl font-bold mb-4">
                        {marketData.name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                        Symbol: {marketData.symbol}
                    </p>
                    <p className="text-gray-600 mb-2">
                        Total Liquidity: {marketData.totalLiquidityUSD} USD
                    </p>
                    <p className="text-gray-600 mb-2">
                        Total Debt: {marketData.totalDebtUSD} USD
                    </p>
                    <p className="text-gray-600 mb-2">
                        Variable Borrow APR: {marketData.variableBorrowAPR}%
                    </p>
                    <p className="text-gray-600 mb-2">
                        Stable Borrow APR: {marketData.stableBorrowAPR}%
                    </p>
                    <p className="text-gray-600 mb-2">
                        Liquidity Rate: {marketData.liquidityRate}
                    </p>

                    {/* Visualization Section */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">
                            Visualizations
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Placeholder charts, replace with actual charts */}
                            <div className="bg-gray-200 p-4 rounded shadow">
                                <p className="text-gray-600 mb-2">
                                    Placeholder Chart 1
                                </p>
                                {/* Add your chart component here */}
                            </div>
                            <div className="bg-gray-200 p-4 rounded shadow">
                                <p className="text-gray-600 mb-2">
                                    Placeholder Chart 2
                                </p>
                                {/* Add your chart component here */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarketDetails;
