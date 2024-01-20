"use client";

import React, { useEffect } from "react";
import {
    incentiveDataProviderContract,
    poolDataProviderContract,
    GhoServiceContract,
} from "@/services/aaveQuery";
import {
    formatGhoReserveData,
    formatGhoUserData,
    formatReserves,
    formatUserSummary,
    formatUserSummaryAndIncentives,
} from "@aave/math-utils";
import dayjs from "dayjs";

import * as markets from "@bgd-labs/aave-address-book";

const UserDataTable: React.FC<{ userAddress: string }> = ({ userAddress }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const reserves =
                    await poolDataProviderContract.getReservesHumanized({
                        lendingPoolAddressProvider:
                            markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
                    });

                // Fetch user-specific Aave data
                const userReserves =
                    await poolDataProviderContract.getUserReservesHumanized({
                        lendingPoolAddressProvider:
                            markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
                        user: userAddress,
                    });

                // Array of incentive tokens with price feed and emission APR
                const reserveIncentives =
                    await incentiveDataProviderContract.getReservesIncentivesDataHumanized(
                        {
                            lendingPoolAddressProvider:
                                markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
                        }
                    );

                // Fetch user incentives data
                const userIncentives =
                    await incentiveDataProviderContract.getUserReservesIncentivesDataHumanized(
                        {
                            lendingPoolAddressProvider:
                                markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
                            user: userAddress,
                        }
                    );

                const reservesArray = reserves.reservesData;
                const baseCurrencyData = reserves.baseCurrencyData;
                const userReservesArray = userReserves.userReserves;

                const currentTimestamp = dayjs().unix();

                const formattedReserves = formatReserves({
                    reserves: reservesArray,
                    currentTimestamp,
                    marketReferenceCurrencyDecimals:
                        baseCurrencyData.marketReferenceCurrencyDecimals,
                    marketReferencePriceInUsd:
                        baseCurrencyData.marketReferenceCurrencyPriceInUsd,
                });

                const userSummary = formatUserSummary({
                    currentTimestamp,
                    marketReferencePriceInUsd:
                        baseCurrencyData.marketReferenceCurrencyPriceInUsd,
                    marketReferenceCurrencyDecimals:
                        baseCurrencyData.marketReferenceCurrencyDecimals,
                    userReserves: userReservesArray,
                    formattedReserves,
                    userEmodeCategoryId: userReserves.userEmodeCategoryId,
                });

                const userSummaryExtra = formatUserSummaryAndIncentives({
                    currentTimestamp,
                    marketReferencePriceInUsd:
                        baseCurrencyData.marketReferenceCurrencyPriceInUsd,
                    marketReferenceCurrencyDecimals:
                        baseCurrencyData.marketReferenceCurrencyDecimals,
                    userReserves: userReservesArray,
                    formattedReserves,
                    userEmodeCategoryId: userReserves.userEmodeCategoryId,
                    reserveIncentives,
                    userIncentives,
                });

                const ghoReserveData =
                    await GhoServiceContract.getGhoReserveData();
                const ghoUserData = await GhoServiceContract.getGhoUserData(
                    "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c"
                );

                const formattedGhoReserveData = formatGhoReserveData({
                    ghoReserveData,
                });
                const formattedGhoUserData = formatGhoUserData({
                    ghoReserveData,
                    ghoUserData,
                    currentTimestamp,
                });
                console.log("3: userSummary:", userSummary);
                console.log("4: userSummaryExtra:", userSummaryExtra);
                console.log(
                    "5: formattedGhoReserveData",
                    formattedGhoReserveData
                );
                console.log("6: formattedGhoUserData", formattedGhoUserData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [userAddress]);
    return <div>UserDataTable</div>;
};

export default UserDataTable;
