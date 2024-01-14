import { ethers } from "ethers";
import {
    UiPoolDataProvider,
    UiIncentiveDataProvider,
    ChainId,
} from "@aave/contract-helpers";
import * as markets from "@bgd-labs/aave-address-book";

// Sample RPC address for querying ETH mainnet
const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-mainnet.public.blastapi.io"
);
console.log("1", provider);

// User address to fetch data for, insert address here
// const currentAccount = "0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c";

// View contract used to fetch all reserves data (including market base currency data), and user reserves
// Using Aave V3 Eth Mainnet address for demo
const poolDataProviderContract = new UiPoolDataProvider({
    uiPoolDataProviderAddress: markets.AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
    provider,
    chainId: ChainId.mainnet,
});

console.log("2", poolDataProviderContract);

// View contract used to fetch all reserve incentives (APRs), and user incentives
// Using Aave V3 Eth Mainnet address for demo
const incentiveDataProviderContract = new UiIncentiveDataProvider({
    uiIncentiveDataProviderAddress:
        markets.AaveV3Ethereum.UI_INCENTIVE_DATA_PROVIDER,
    provider,
    chainId: ChainId.mainnet,
});

console.log("3", incentiveDataProviderContract);

export { provider, poolDataProviderContract, incentiveDataProviderContract };
