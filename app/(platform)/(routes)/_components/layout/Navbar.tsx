import { ConnectKitButton } from "connectkit";
import { Logo } from "./Logo";
import { MobileSidebar } from "./MobileSidebar";

export const Navbar = () => {
    return (
        <nav className="px-4 md-px-8 w-full h-16 border-b shadow-sm flex items-center">
            <div className="flex lg:max-w-screen-7xl w-full items-center">
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
