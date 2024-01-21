interface HeadingProps {
    children: string;
    subtext?: string;
    className?: string;
}

const HeadingText = ({ children, subtext, className }: HeadingProps) => {
    return (
        <div className={`space-y-2 ${className}`}>
            <h1 className="text-3xl font-bold lg:text-4xl">{children}</h1>
            {subtext && (
                <h2 className="font-light text-muted-foreground lg:text-lg">
                    {subtext}
                </h2>
            )}
        </div>
    );
};

export default HeadingText;
