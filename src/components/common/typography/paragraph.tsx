import {cn} from "@/lib/utils";

type ParagraphProps = {
    as?: "p" | "b" | "i" | "ul" | "ol";
    size?: "xl" | "lg" | "md" | "sm";
    children: React.ReactNode;
    className?: string;
};

const Paragraph = ({
    as: Component = "p",
    className,
    children,
    size = "md",
    ...restProps
}: ParagraphProps) => {
    return (
        <Component
            {...restProps}
            className={cn(
                "font-normal block text-slate-500 dark:text-slate-400",
                size === "xl" && "text-xl md:text-3xl",
                size === "lg" && "text-lg md:text-2xl",
                size === "md" && "text-base sm:text-xl",
                size === "sm" && "text-sm md:text-base",
                className
            )}
        >
            {children}
        </Component>
    );
};

export default Paragraph;
