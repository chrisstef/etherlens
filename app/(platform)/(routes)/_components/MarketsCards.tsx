"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import millify from "millify";
import { formatReserves } from "@aave/math-utils";
import * as markets from "@bgd-labs/aave-address-book";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { poolDataProviderContract } from "@/services/aaveQuery";
import { Skeleton } from "@/components/ui/skeleton";

interface MarketsData {
    totalAvailable: number | null;
    totalMarket: number | null;
    totalBorrowed: number | null;
    totalUtilization: number | null;
}

const MarketsCards = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [summary, setSummary] = useState<MarketsData>({
        totalAvailable: null,
        totalMarket: null,
        totalBorrowed: null,
        totalUtilization: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reserves =
                    await poolDataProviderContract.getReservesHumanized({
                        lendingPoolAddressProvider:
                            markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
                    });

                const reservesArray = reserves.reservesData;
                const baseCurrencyData = reserves.baseCurrencyData;

                const currentTimestamp = dayjs().unix();

                const formattedReserves = formatReserves({
                    reserves: reservesArray,
                    currentTimestamp,
                    marketReferenceCurrencyDecimals:
                        baseCurrencyData.marketReferenceCurrencyDecimals,
                    marketReferencePriceInUsd:
                        baseCurrencyData.marketReferenceCurrencyPriceInUsd,
                });

                const totalMarketSize = formattedReserves.reduce(
                    (acc, reserve) =>
                        acc + parseFloat(reserve.totalLiquidityUSD),
                    0
                );

                const totalBorrows = formattedReserves.reduce(
                    (acc, reserve) => acc + parseFloat(reserve.totalDebtUSD),
                    0
                );

                const totalAvailableToBorrow = totalMarketSize - totalBorrows;

                const totalUtilizationRate =
                    (totalBorrows / totalMarketSize) * 100;

                setSummary({
                    totalAvailable: totalAvailableToBorrow,
                    totalMarket: totalMarketSize,
                    totalBorrowed: totalBorrows,
                    totalUtilization: totalUtilizationRate,
                });

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
            {/* Total Market Size Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Market Size
                    </CardTitle>
                    <Icons.dollar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="lg:text-lg xl:text-2xl font-bold">
                        {loading ? (
                            <Skeleton className="h-8 w-[65px]" />
                        ) : (
                            `${millify(summary.totalMarket ?? 0, {
                                precision: 2,
                            })}`
                        )}
                    </div>
                    <p className="text-xs text-muted-foreground">USD</p>
                </CardContent>
            </Card>

            {/* Total Available to Borrow Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Available to Borrow
                    </CardTitle>
                    <Icons.dollar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="lg:text-lg xl:text-2xl font-bold">
                        {loading ? (
                            <Skeleton className="h-8 w-[65px]" />
                        ) : (
                            `${millify(summary.totalAvailable ?? 0, {
                                precision: 2,
                            })}`
                        )}
                    </div>
                    <p className="text-xs text-muted-foreground">USD</p>
                </CardContent>
            </Card>

            {/* Total Borrows Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Borrows
                    </CardTitle>
                    <Icons.dollar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="lg:text-lg xl:text-2xl font-bold">
                        {loading ? (
                            <Skeleton className="h-8 w-[65px]" />
                        ) : (
                            `${millify(summary.totalBorrowed ?? 0, {
                                precision: 2,
                            })}`
                        )}
                    </div>
                    <p className="text-xs text-muted-foreground">USD</p>
                </CardContent>
            </Card>
            {/* Total Utilization Rate Card */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Utilization Rate
                    </CardTitle>
                    <Icons.fire className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="lg:text-lg xl:text-2xl font-bold">
                        {loading ? (
                            <Skeleton className="h-8 w-[65px]" />
                        ) : (
                            `${millify(summary.totalUtilization ?? 0, {
                                precision: 2,
                            })}`
                        )}
                    </div>
                    <p className="text-xs text-muted-foreground">%</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default MarketsCards;
