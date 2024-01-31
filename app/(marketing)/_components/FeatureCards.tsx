import { BsFire, BsLayoutTextWindowReverse } from "react-icons/bs";
import { RxActivityLog } from "react-icons/rx";
import { TbDeviceAnalytics } from "react-icons/tb";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import HeadingText from "./HeadingText";

const FeatureCards = () => {
    return (
        <section className="bg-secondary" id="features">
            <div className="container space-y-8 py-12 text-center lg:py-20">
                <HeadingText subtext="What does GHO Lens offer?">
                    Features
                </HeadingText>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                    <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
                        <TbDeviceAnalytics className="text-3xl" />

                        <CardTitle>Advanced Insights</CardTitle>
                        <CardDescription>
                            Stay informed with real-time Market insights.
                            Witness the nature of DeFi markets at a glance,
                            empowering you to make timely decisions.
                        </CardDescription>
                    </Card>
                    <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
                        <BsFire className="text-3xl" />
                        <CardTitle>Facilitator Intelligence</CardTitle>
                        <CardDescription>
                            Explore the innovative Facilitators feature,
                            providing in-depth insights into the entities
                            trustlessly minting and burning GHO tokens.
                        </CardDescription>
                    </Card>
                    <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
                        <RxActivityLog className="text-3xl" />

                        <CardTitle>Accessibility for All</CardTitle>
                        <CardDescription>
                            Our commitment to inclusivity extends to features
                            such as customizable font sizes, color schemes, and
                            screen reader compatibility.
                        </CardDescription>
                    </Card>

                    <Card className="flex flex-grow flex-col justify-between gap-4 p-8 text-left dark:bg-secondary">
                        <BsLayoutTextWindowReverse className="text-3xl" />
                        <CardTitle>Seamless UI</CardTitle>
                        <CardDescription>
                            Our clean design caters to both beginners and
                            experienced users, making GHO Lens your gateway to
                            DeFi without any friction.
                        </CardDescription>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default FeatureCards;
