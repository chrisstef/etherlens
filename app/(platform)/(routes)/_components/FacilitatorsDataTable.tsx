"use client";

import useFacilitatorsData from "@/hooks/useAaveFacilitators";
import React, { useEffect } from "react";
import millify from "millify";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FacilitatorsDataTable = () => {
    const { formattedGhoReserveData, isLoading } = useFacilitatorsData();

    useEffect(() => {
        if (!isLoading && formattedGhoReserveData) {
            console.log("Formatted Gho Reserve Data:", formattedGhoReserveData);
        }
    }, [isLoading, formattedGhoReserveData]);

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Aave Facilitator</CardTitle>
                    <CardDescription>
                        One of the initial Facilitators on the Ethereum Mainnet.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid space-y-2">
                        <div className="flex justify-between">
                            {formattedGhoReserveData && !isLoading ? (
                                <Label>
                                    Minted:&nbsp;
                                    {millify(
                                        formattedGhoReserveData?.aaveFacilitatorBucketLevel,
                                        { precision: 2 }
                                    )}
                                    &nbsp;<b>GHO</b>
                                </Label>
                            ) : (
                                <Skeleton className="h-4 w-36" />
                            )}
                            {formattedGhoReserveData && !isLoading ? (
                                <Label>
                                    Max Capacity:&nbsp;
                                    {millify(
                                        formattedGhoReserveData?.aaveFacilitatorBucketMaxCapacity
                                    )}
                                    &nbsp;<b>GHO</b>
                                </Label>
                            ) : (
                                <Skeleton className="h-4 w-44" />
                            )}
                        </div>

                        <Progress
                            value={
                                ((formattedGhoReserveData?.aaveFacilitatorMintedPercent ||
                                    0) * 100) as number
                            }
                        />
                    </div>
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 pt-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Minted percentage
                                </CardTitle>
                                <Icons.fire className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="lg:text-lg xl:text-2xl font-bold">
                                    {isLoading ? (
                                        <Skeleton className="h-8 w-[24%]" />
                                    ) : (
                                        (
                                            formattedGhoReserveData?.aaveFacilitatorMintedPercent *
                                            100
                                        ).toFixed(2)
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
                                    Remaining Capacity
                                </CardTitle>
                                <Icons.fire className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="lg:text-lg xl:text-2xl font-bold">
                                    {isLoading ? (
                                        <Skeleton className="h-8 w-[24%]" />
                                    ) : (
                                        `${millify(
                                            formattedGhoReserveData?.aaveFacilitatorRemainingCapacity ??
                                                0,
                                            {
                                                precision: 2,
                                            }
                                        )}`
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    GHO
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Minimum Holdings for discount
                                </CardTitle>
                                <Icons.fire className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="lg:text-lg xl:text-2xl font-bold">
                                    {isLoading ? (
                                        <Skeleton className="h-8 w-[24%]" />
                                    ) : (
                                        formattedGhoReserveData?.ghoMinDiscountTokenBalanceForDiscount
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    GHO
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Discount per token
                                </CardTitle>
                                <Icons.fire className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="lg:text-lg xl:text-2xl font-bold">
                                    {isLoading ? (
                                        <Skeleton className="h-8 w-[24%]" />
                                    ) : (
                                        formattedGhoReserveData?.ghoDiscountedPerToken
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    GHO
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Discount Rate
                                </CardTitle>
                                <Icons.fire className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="lg:text-lg xl:text-2xl font-bold">
                                    {isLoading ? (
                                        <Skeleton className="h-8 w-[24%]" />
                                    ) : (
                                        formattedGhoReserveData?.ghoDiscountRate *
                                        100
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
                                    Borrow Rate APY
                                </CardTitle>
                                <Icons.fire className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="lg:text-lg xl:text-2xl font-bold">
                                    {isLoading ? (
                                        <Skeleton className="h-8 w-[24%]" />
                                    ) : (
                                        <>
                                            {`${(
                                                formattedGhoReserveData?.ghoBorrowAPYWithMaxDiscount *
                                                100
                                            ).toFixed(2)}`}
                                            <span className="text-muted-foreground font-light">
                                                {" "}
                                                -{" "}
                                            </span>
                                            {`${(
                                                formattedGhoReserveData?.ghoVariableBorrowAPY *
                                                100
                                            ).toFixed(2)}`}
                                        </>
                                    )}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    %
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    <Button
                        variant="secondary"
                        className="w-full mt-6"
                        disabled
                    >
                        <Icons.fire className="mr-2 h-4 w-4" />
                        Borrow
                    </Button>
                </CardContent>
            </Card>
            <div className="pt-10 w-full flex items-center justify-center">
                <Badge variant="outline" className="p-5 text-md text-center">
                    More Facilitators Coming Soon.
                </Badge>
            </div>
        </>
    );
};

export default FacilitatorsDataTable;
