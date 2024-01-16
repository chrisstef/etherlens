import { ethers } from "ethers";
import {
    UiPoolDataProvider,
    UiIncentiveDataProvider,
    ChainId,
    GhoService,
} from "@aave/contract-helpers";
import * as markets from "@bgd-labs/aave-address-book";

// Sample RPC address for querying ETH mainnet
const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.public.blastapi.io"
);

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

export {
    provider,
    poolDataProviderContract,
    incentiveDataProviderContract,
    GhoServiceContract,
};
