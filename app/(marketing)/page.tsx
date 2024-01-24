import FeatureCards from "./_components/FeatureCards";
import Hero from "./_components/Hero";
import OpenSource from "./_components/OpenSource";
import Zigzag from "./_components/Zigzag";

const LandingPage = () => {
    return (
        <main className="overflow-hidden">
            <Hero />
            <FeatureCards />
            <Zigzag />
            <OpenSource />
        </main>
    );
};

export default LandingPage;
