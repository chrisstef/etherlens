import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";

const NotFound = () => {
    return (
        <div className="min-h-screen justify-center">
            <section className="grid h-screen py-32">
                <div className="mx-auto w-[calc(100%-3rem)] max-w-screen-xl grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center">
                    <div className="justify-self-center text-center space-y-2 lg:text-left">
                        <h1 className="text-3xl font-bold lg:text-4xl">
                            Hey Buddy
                        </h1>
                        <h2 className="font-light text-muted-foreground pb-2 lg:text-lg">
                            Looks like you've found the doorway <br /> to the
                            great nothing.
                        </h2>
                        <Button variant="default" size="sm" asChild>
                            <Link href="/">GHO Home</Link>
                        </Button>
                    </div>

                    <div className="justify-self-center pt-10">
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
