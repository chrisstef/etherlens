import { ConnectkitProvider } from "@/lib/connectkit";

export default function PlatformLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <ConnectkitProvider>{children}</ConnectkitProvider>;
}
