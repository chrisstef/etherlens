import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <div className="absolute -top-[100px] left-0 -z-10 h-72 w-72 rounded-full bg-pink-400 blur-[500px]" />
            <div className="absolute -top-[100px] left-1/2 -z-10 h-72 w-72 -translate-x-1/2 transform rounded-full bg-blue-400 blur-[500px]" />
            <div className="absolute -top-[100px] right-0 -z-10 h-72 w-72 rounded-full bg-purple-400 blur-[500px]" />
            <Navbar />
            <main className="pt-40 pb-20">{children}</main>
            <Footer />
        </div>
    );
};

export default LandingLayout;
