const GHO_TOKEN_ID = "gho";

export const fetchTokenData = async () => {
    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${GHO_TOKEN_ID}`
        );
        const data = await response.json();

        const marketCap = data.market_data.market_cap.usd;
        const dailyVolume = data.market_data.total_volume.usd;

        // Calculate Volume/Market Cap (24h) ratio
        const volumeMarketCapRatio =
            marketCap !== 0 ? (dailyVolume / marketCap) * 100 : 0;

        return {
            currentPrice: data.market_data.current_price.usd,
            marketCap,
            dailyVolume,
            volumeMarketCapRatio,
        };
    } catch (error: any) {
        console.error("Error fetching token data:", error.message);
        throw error;
    }
};
