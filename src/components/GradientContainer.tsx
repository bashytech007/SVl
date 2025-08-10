import EllipseBg from "../assets/ellipses.png";

const GradientContainer = ({ children }: { children: React.ReactElement }) => {
  return (
    <section className="w-full bg-[#fefefe] relative">
      <div>
        <img
          src={EllipseBg}
          alt="ellipse"
          className="w-[400px] absolute pointer-events-none right-[00%]"
        />
        <img
          src={EllipseBg}
          alt="ellipse"
          className="w-[800px] absolute pointer-events-none left-[0%] bottom-[-40%]"
        />
      </div>
      {children}
    </section>
  );
};

export default GradientContainer;
