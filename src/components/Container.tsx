import { cn } from "../utils/cn";

type ContainerType = { children: React.ReactElement; className?: string };

const Container = ({ children, className }: ContainerType) => {
  return <section className={cn("", className)}>{children}</section>;
};

export default Container;
