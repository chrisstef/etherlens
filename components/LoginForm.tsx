import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

const LoginForm = () => {
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Sample image"
                />
            </div>
            <div className="md:w-1/3 max-w-sm">
                <div className="text-center">
                    <Button className="w-full" type="submit" size="lg">
                        Connect Wallet
                    </Button>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                        Or
                    </p>
                </div>
                <Input type="email" placeholder="Email" />
                <div className="text-center">
                    <Button className="mt-6 w-full" variant="outline" size="lg">
                        Connect with Magic
                    </Button>
                </div>
                <div className="mt-4 font-semibold text-sm bg-slate-100 p-4 text-slate-500 text-center rounded-md flex items-center justify-center">
                    <Sparkles className="mr-2" />
                    <span>
                        We'll email you a Magic code for password-free
                        authentication.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
