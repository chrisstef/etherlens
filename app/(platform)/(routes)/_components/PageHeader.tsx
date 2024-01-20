import { PageHeaderProps } from "@/types";

const PageHeader = ({ heading, text, children }: PageHeaderProps) => {
    return (
        <div className="flex flex-col items-center justify-between gap-4 px-2 text-center md:flex-row md:text-left">
            <div className="grid gap-1">
                <h1 className="text-2xl font-bold md:text-3xl">{heading}</h1>
                {text && (
                    <p className="text-lg text-muted-foreground">{text}</p>
                )}
            </div>
            {children}
        </div>
    );
};

export default PageHeader;
