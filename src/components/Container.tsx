import { cn } from "../utils/cn";

type ContainerType = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

const Container: React.FC<ContainerType> = ({ children, className }) => {
  return <section className={cn("", className)}>{children}</section>;
};

export default Container;
