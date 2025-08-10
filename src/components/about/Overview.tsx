import React from "react";

const Overview = ({
  text,
  children,
}: {
  text: string;
  children: React.ReactElement;
}) => {
  return (
    <div className="mx-auto mb-4 mt-4">
      <span className="block uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#541B9C] to-[#fb060abd] text-center md:text-3xl text-base mb-4 md:mb-8">
        {text}
      </span>
      {children}
    </div>
  );
};

export default Overview;
