import { ConnectKitButton } from "connectkit";
import { Logo } from "./Logo";
import { MobileSidebar } from "./MobileSidebar";

export const Navbar = () => {
    return (
        <nav className="px-4 md-px-8 w-full h-20 border-b shadow-sm flex items-center">
            <div className="flex max-w-screen-4xl w-full items-center">
                <div className="md:flex">
                    <Logo />
                    <MobileSidebar />
                </div>
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <ConnectKitButton />
            </div>
        </nav>
    );
};
