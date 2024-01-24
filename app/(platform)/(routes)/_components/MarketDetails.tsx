"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import millify from "millify";
import { useSearchParams } from "next/navigation";
import useAaveData from "@/hooks/useAaveData";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MarketData } from "@/types";

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
        <>
            <Button className="w-32" variant="outline" asChild>
                <Link href="/dashboard/markets">
                    <Icons.back className="mr-2 h-4 w-4" />
                    GHO Back
                </Link>
            </Button>
            {marketData ? (
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-wrap">
                                <CardTitle className="py-1">
                                    {marketData?.name}
                                </CardTitle>
                                {marketData?.eModeLabel && (
                                    <Badge
                                        variant="outline"
                                        className="ml-3 border-violet-300"
                                    >
                                        {marketData.eModeLabel}
                                    </Badge>
                                )}
                                {marketData?.usageAsCollateralEnabled && (
                                    <Badge
                                        variant="outline"
                                        className="ml-3 border-violet-500"
                                    >
                                        Can be collateral
                                    </Badge>
                                )}
                            </div>
                        </div>
                        <CardDescription>
                            $ {Number(marketData?.priceInUSD).toFixed(2)}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Liquidation ratio
                                    </CardTitle>
                                    <Icons.fire className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="lg:text-lg xl:text-2xl font-bold">
                                        {isLoading ? (
                                            <Skeleton className="h-8 w-[24%]" />
                                        ) : (
                                            `${millify(
                                                Number(
                                                    marketData?.formattedReserveLiquidationThreshold
                                                ) * 100
                                            )}`
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        %
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Borrow / Usage ratio
                                    </CardTitle>
                                    <Icons.fire className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="lg:text-lg xl:text-2xl font-bold">
                                        {isLoading ? (
                                            <Skeleton className="h-8 w-[24%]" />
                                        ) : (
                                            `${millify(
                                                Number(
                                                    marketData?.borrowUsageRatio
                                                ) * 100
                                            )}`
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        %
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 pt-6">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Available Liquidity
                                    </CardTitle>
                                    <Icons.dollar className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="lg:text-lg xl:text-2xl font-bold">
                                        {isLoading ? (
                                            <Skeleton className="h-8 w-[24%]" />
                                        ) : (
                                            `${millify(
                                                Number(
                                                    marketData?.availableLiquidityUSD
                                                ),
                                                {
                                                    precision: 2,
                                                }
                                            )}`
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        USD
                                    </p>
                                    <div className="mt-10">
                                        <Label htmlFor="add">Amount</Label>

                                        <Input
                                            id="add"
                                            type="number"
                                            placeholder="0.00"
                                        />
                                        <Button
                                            variant="secondary"
                                            className="w-full mt-3"
                                            disabled
                                        >
                                            <Icons.add className="mr-2 h-4 w-4" />
                                            Add Liquidity
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Unused Liquidity
                                    </CardTitle>
                                    <Icons.dollar className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="lg:text-lg xl:text-2xl font-bold">
                                        {isLoading ? (
                                            <Skeleton className="h-8 w-[24%]" />
                                        ) : (
                                            `${millify(
                                                Number(
                                                    marketData?.totalLiquidityUSD
                                                ) -
                                                    Number(
                                                        marketData?.availableLiquidityUSD
                                                    ),
                                                {
                                                    precision: 2,
                                                }
                                            )}`
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        USD
                                    </p>
                                    <div className="mt-10">
                                        <Label htmlFor="borrow">Amount</Label>
                                        <Input
                                            id="borrow"
                                            type="number"
                                            placeholder="0.00"
                                        />
                                        <Button
                                            variant="secondary"
                                            className="w-full mt-3"
                                            disabled
                                        >
                                            <Icons.fire className="mr-2 h-4 w-4" />
                                            Borrow
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <div className="flex items-center justify-center">
                    <Spinner />
                </div>
            )}
        </>
    );
};

export default MarketDetails;
