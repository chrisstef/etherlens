import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen justify-center">
            <section className="grid h-screen pt-32 pb-16">
                <div className="mx-auto w-[calc(100%-3rem)] max-w-screen-xl grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center">
                    <div className="justify-self-center text-center lg:text-left">
                        <p className="xl:text-[16px] sm:text-[14px] text-[12px]uppercase font-bold pb-2">
                            Error 404
                        </p>
                        <h1 className="pb-4 text-5xl font-bold lg:text-6xl">
                            Hey Buddy
                        </h1>
                        <p className="pb-8 font-semibold text-[16px] leading-[24px] text-muted-foreground">
                            Looks like you've found the doorway <br /> to the
                            great nothing.
                        </p>
                        <Button variant="default" size="lg" asChild>
                            <Link href="/">GHO Home</Link>
                        </Button>
                    </div>

                    <div className="justify-self-center pt-6">
                        <Image
                            src="/gho.gif"
                            className="w-64 animate-[bounce_3s_ease-in-out_infinite] lg:w-[400px]"
                            width={300}
                            height={300}
                            alt="ghost image"
                            priority
                        />
                        <div className="mx-auto h-8 w-36 animate-shadow rounded-[50%] bg-gray-900/30 blur-md lg:w-64"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
