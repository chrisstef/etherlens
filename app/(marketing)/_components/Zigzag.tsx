import HeadingText from "./HeadingText";
import { CardTitle } from "@/components/ui/card";
import DashboardLight from "@/public/dashboard-light.png";
import MarketsLight from "@/public/markets-light.png";
import FacilitatorsLight from "@/public/facilitators-light.png";
import { ImageFrame } from "./ImageFrame";

const Zigzag = () => {
    return (
        <section id="overview">
            <div className="container max-w-screen-4xl space-y-8 py-12 text-center lg:py-28">
                {/* Section header */}
                <div className="inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full mb-4">
                    Technical Prowess
                </div>
                <HeadingText subtext="Unlocking DeFi with GHO Lens.">
                    Overview
                </HeadingText>

                {/* Items */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:space-y-20 space-y-10">
                    {/* 1st item - Dashboard */}
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                        {/* Image */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                            <ImageFrame>
                                <img
                                    className="max-w-full mx-auto h-auto rounded-md"
                                    src={DashboardLight.src}
                                    width={640}
                                    height={360}
                                    alt="Dashboard Screenshot Light"
                                />
                            </ImageFrame>
                        </div>
                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 text-left md:pb-0 pb-20">
                                <CardTitle className="mb-2">
                                    Real-Time Data Snapshot
                                </CardTitle>

                                <p className="text-xl text-gray-400 mb-8">
                                    Access real-time insights into GHO and Aave,
                                    liquidity trends, and key metrics with our
                                    comprehensive Dashboard. Stay informed and
                                    make data-driven decisions in an instant.
                                </p>
                                <ul className="text-lg text-gray-400 -mb-2">
                                    <li className="flex items-center mb-2">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>
                                            Real-time insights at your
                                            fingertips
                                        </span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>
                                            Identify trends effortlessly
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>
                                            Make informed decisions instantly
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 2nd item - Markets */}
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                        {/* Image */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0">
                            <ImageFrame>
                                <img
                                    className="max-w-full mx-auto h-auto rounded-md"
                                    src={MarketsLight.src}
                                    width={640}
                                    height={360}
                                    alt="Markets Screenshot Light"
                                />
                            </ImageFrame>
                        </div>
                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                            <div className="md:pl-4 lg:pl-12 xl:pl-16 text-left md:pb-0 pb-20">
                                <CardTitle className="mb-2">
                                    In-Depth Market Analysis
                                </CardTitle>

                                <p className="text-xl text-gray-400 mb-8">
                                    Dive deep into Aave's ecosystem with our
                                    Markets page. Gain access to detailed
                                    information about Reserves, Incentives,
                                    borrowing rates, and yield opportunities.
                                </p>
                                <ul className="text-lg text-gray-400 -mb-2">
                                    <li className="flex items-center mb-2">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>
                                            Access tools for optimized DeFi
                                            strategies
                                        </span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>
                                            Optimize strategies with borrowing
                                            rates
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>
                                            Spot lucrative yield opportunities
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 3rd item - Facilitators */}
                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                        {/* Image */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                            <ImageFrame>
                                <img
                                    className="max-w-full mx-auto h-auto rounded-md"
                                    src={FacilitatorsLight.src}
                                    width={640}
                                    height={360}
                                    alt="Facilitators Screenshot Light"
                                />
                            </ImageFrame>
                        </div>
                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 text-left md:pb-0 pb-20">
                                <CardTitle className="mb-2">
                                    Explore Facilitators
                                </CardTitle>
                                <p className="text-xl text-gray-400 mb-8">
                                    Introducing the innovative Facilitator
                                    system. Entities trustlessly mint and burn
                                    GHO tokens through strategies, assigned by
                                    the Aave DAO. Dive into GHO decentralized
                                    token operations.
                                </p>
                                <ul className="text-lg text-gray-400 -mb-2">
                                    <li className="flex items-center mb-2">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>
                                            Elevate your financial journey with
                                            Facilitators
                                        </span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>
                                            Overview minted and burned GHO
                                            tokens
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>
                                            Embrace optimized decision making
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Zigzag;
