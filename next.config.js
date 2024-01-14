/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
    },
    webpack: (config) => {
        config.externals.push("pino-pretty");
        return config;
    },
};

module.exports = nextConfig;
