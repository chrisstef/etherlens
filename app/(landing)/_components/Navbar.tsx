import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-16 px-4 md-px-8 border-b shadow-sm flex items-center">
            <div className="md:max-w-screen-4xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" asChild>
                        <Link href="/login">Get started</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
};
