import { cn } from "../utils/cn";

type ButtonType = {
  type?: "submit" | "reset" | "button";
  text: string;
  className?: string;
};

const Button = ({ text, className, type = "button" }: ButtonType) => {
  return (
    <button
      type={type}
      className={cn(
        "rounded-full text-sm md:text-base py-2 px-5 md:py-4 md:px-10 my-5 md:my-10 uppercase bg-gradient-to-r from-[#551b9c] to-[#fb060abd]",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
