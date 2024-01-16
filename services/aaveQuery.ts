import { ethers } from "ethers";
import {
    UiPoolDataProvider,
    UiIncentiveDataProvider,
    ChainId,
    GhoService,
} from "@aave/contract-helpers";
import * as markets from "@bgd-labs/aave-address-book";
import { formatReserves } from "@aave/math-utils";
import dayjs from "dayjs";

// Sample RPC address for querying ETH mainnet
const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.public.blastapi.io"
);

// User address to fetch data for, insert address here
const currentAccount = "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c";

// View contract used to fetch all reserves data (including market base currency data), and user reserves
// Using Aave V3 Eth Mainnet address for demo
const poolDataProviderContract = new UiPoolDataProvider({
    uiPoolDataProviderAddress: markets.AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
    provider,
    chainId: ChainId.mainnet,
});

// View contract used to fetch all reserve incentives (APRs), and user incentives
// Using Aave V3 Eth Mainnet address for demo
const incentiveDataProviderContract = new UiIncentiveDataProvider({
    uiIncentiveDataProviderAddress:
        markets.AaveV3Ethereum.UI_INCENTIVE_DATA_PROVIDER,
    provider,
    chainId: ChainId.mainnet,
});

const GhoServiceContract = new GhoService({
    uiGhoDataProviderAddress: markets.AaveV3Ethereum.UI_GHO_DATA_PROVIDER,
    provider,
});

export async function fetchContractData() {
    // Object containing array of pool reserves and market base currency data
    // { reservesArray, baseCurrencyData }
    const reserves = await poolDataProviderContract.getReservesHumanized({
        lendingPoolAddressProvider:
            markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
    });

    // Object containing array or users aave positions and active eMode category
    // { userReserves, userEmodeCategoryId }
    const userReserves =
        await poolDataProviderContract.getUserReservesHumanized({
            lendingPoolAddressProvider:
                markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
            user: currentAccount,
        });

    // Array of incentive tokens with price feed and emission APR
    const reserveIncentives =
        await incentiveDataProviderContract.getReservesIncentivesDataHumanized({
            lendingPoolAddressProvider:
                markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
        });

    // Dictionary of claimable user incentives
    const userIncentives =
        await incentiveDataProviderContract.getUserReservesIncentivesDataHumanized(
            {
                lendingPoolAddressProvider:
                    markets.AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
                user: currentAccount,
            }
        );

    console.log({ reserves, userReserves, reserveIncentives, userIncentives });
}

export {
    provider,
    poolDataProviderContract,
    incentiveDataProviderContract,
    GhoServiceContract,
};
