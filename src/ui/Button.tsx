import Loader from "../components/Loader";
import { cn } from "../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button";
  text: string;
  className?: string;
  isLoading?: boolean;
}

const Button = ({
  text,
  className,
  onClick,
  type = "button",
  isLoading,
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading}
      type={type}
      onClick={onClick}
      className={cn(
        "rounded-full text-sm md:text-base py-2 px-5 md:py-4 md:px-10 my-5 md:my-10 uppercase bg-gradient-to-r from-[#551b9c] to-[#fb060abd]",
        className
      )}
    >
      {isLoading ? <Loader size={20} /> : text}
    </button>
  );
};

export default Button;
