import Link from "next/link";
import { navLinks } from "@/config/links";

export const Footer = () => {
    return (
        <footer className="mx-auto w-full max-w-screen-4xl px-6">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="/">
                    <p className="text-lg font-bold">GHO Lens</p>
                </Link>
                <ul className="flex flex-wrap items-center opacity-60 sm:mb-0">
                    {navLinks.data.map((item, index) => {
                        return (
                            item.href && (
                                <li key={index}>
                                    <Link
                                        href={item.disabled ? "/" : item.href}
                                        className="hover:underline me-4"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        );
                    })}
                </ul>
            </div>
            <hr className="my-3 text-muted-foreground sm:mx-auto" />
            <div className="flex my-4 items-center justify-center text-sm text-muted-foreground sm:text-center">
                © {new Date().getFullYear()}&nbsp;
                <a
                    target="_blank"
                    href="https://github.com/chrisstef/gho-lens"
                    className="hover:underline"
                >
                    GHO Lens
                </a>
                . All Rights Reserved.
            </div>
        </footer>
    );
};
