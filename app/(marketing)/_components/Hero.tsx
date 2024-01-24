import Link from "next/link";
import { cn } from "@/lib/utils";
import FacilitatorsLight from "@/public/facilitators-light.png";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ImageFrame } from "./ImageFrame";

const Hero = () => {
    return (
        <>
            <section
                className="space-y-8 md:space-y-16 pb-12 lg:pb-28"
                id="home"
            >
                <div className="container flex max-w-[64rem] flex-col items-center gap-8 text-center">
                    <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                        Open source
                    </div>
                    <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
                        Explore GHO Token
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Immerse yourself in the dynamic GHO Ecosystem for
                        real-time insights. Explore Markets, Facilitators,
                        monitor DeFi metrics, and stay informed about network
                        activities.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" asChild>
                            <Link href="/login">Let's GHO</Link>
                        </Button>
                        <Link
                            href="https://github.com/chrisstef/gho-lens"
                            target="_blank"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                })
                            )}
                        >
                            <Icons.github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </Link>
                    </div>
                </div>
                <div className="mx-auto max-w-4xl px-10 lg:px-12">
                    <ImageFrame>
                        <img
                            className="max-w-full mx-auto h-auto rounded-md"
                            src={FacilitatorsLight.src}
                            width={760}
                            height={460}
                            alt="Facilitators Screenshot Light"
                        />
                    </ImageFrame>
                </div>
            </section>
        </>
    );
};

export default Hero;
