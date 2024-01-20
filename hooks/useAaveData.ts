import { useEffect, useState } from "react";
import { formatReserves } from "@aave/math-utils";
import dayjs from "dayjs";
import * as markets from "@bgd-labs/aave-address-book";
import { poolDataProviderContract } from "@/services/aaveQuery";
import { ReserveData } from "@/types";

const useAaveData = () => {
    const [formattedReserves, setFormattedReserves] = useState<ReserveData[]>(
        []
    );
    const [isLoading, setIsLoading] = useState(true);

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

                setFormattedReserves(formattedReserves);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return { formattedReserves, isLoading };
};

export default useAaveData;
