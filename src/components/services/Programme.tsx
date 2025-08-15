import { cn } from "../../utils/cn";

const Programme = ({
  img,
  title,
  children,
  reverseRow = false,
}: {
  img: string;
  title: string;
  children: React.ReactElement;
  reverseRow?: boolean;
}) => {
  return (
    <div className="max-w-full mb-6 md:mb-10">
      <h3 className="md:text-xl font-semibold mb-3 md:mb-6 text-center md:text-left">
        {title}
      </h3>
      <div
        className={cn(
          "flex gap-4 items-center mb-4 flex-col md:flex-row",
          reverseRow && "md:flex-row-reverse"
        )}
      >
        <div className="rounded-xl w-[300px] md:w-[50%] overflow-hidden">
          <img src={img} className="object-cover w-full" />
        </div>
        <ul className="list-disc pl-6 text-sm md:text-base md:space-y-2 md:max-w-[50%]">
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Programme;
