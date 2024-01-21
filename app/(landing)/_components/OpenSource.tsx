import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import HeadingText from "./HeadingText";

const OpenSource = async () => {
    const { stargazers_count: stars } = await fetch(
        "https://api.github.com/repos/chrisstef/gho-lens",
        {
            next: { revalidate: 60 },
        }
    )
        .then((res) => res.json())
        .catch((e) => console.error(e));

    return (
        <section className="container py-12 lg:py-20">
            <div className="flex flex-col items-center gap-4">
                <HeadingText
                    subtext="Feel free to view the codebase!"
                    className="text-center"
                >
                    Fully Open Source
                </HeadingText>
                <Link
                    href="https://github.com/chrisstef/gho-lens"
                    target="_blank"
                    className={cn(
                        buttonVariants({ variant: "outline", size: "lg" })
                    )}
                >
                    <Icons.star className="mr-2 h-4 w-4" />
                    <span>{stars} on Github</span>
                </Link>
            </div>
        </section>
    );
};

export default OpenSource;
