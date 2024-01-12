import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-4xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" asChild>
                        <Link href="/sign-up">Get started</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
};
