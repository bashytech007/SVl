import { cn } from "../utils/cn";

const GradientUnderlined = ({
  text,
  className,
  wrapperClassName,
}: {
  text: string;
  className?: string;
  wrapperClassName?: string;
}) => {
  return (
    <div className={cn("pt-24", wrapperClassName)}>
      <h2
        className={cn(
          "uppercase font-semibold text-xl md:text-3xl tracking-wider text-[#000]",
          className
        )}
      >
        {text}
      </h2>
      <span className="block justify-self-start bg-herobg z-10 w-[120px] h-[5px]"></span>
    </div>
  );
};

export default GradientUnderlined;
