const cryptoApiHeaders = {
    "x-rapidapi-host": process.env.NEXT_PUBLIC_CRYPTO_BASE_URL as string,
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
};

export const fetchCoins = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url, {
            headers: new Headers(cryptoApiHeaders),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};
