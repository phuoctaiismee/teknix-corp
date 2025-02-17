import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputIconProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "prefix" | "suffix"
  > {
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  className?: string;
}

const InputIcon = ({ prefix, suffix, className, ...props }: InputIconProps) => {
  return (
    <div className="relative w-full">
      {prefix && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
          {prefix}
        </div>
      )}
      <Input
        className={cn(
          prefix && "pl-8 rounded-[8px]",
          suffix && "pr-8 rounded-[8px]",
          className
        )}
        {...props}
      />
      {suffix && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
          {suffix}
        </div>
      )}
    </div>
  );
};

export default InputIcon;
