import HeroImg from "../assets/svl-hero-img.png";

export default function Hero() {
  return (
    <section className="flex gap-6 flex-1 justify-center items-center flex-col md:flex-row mt-5">
      <aside className="md:max-w-[50%]">
        <h2 className="font-bold text-4xl">
          <span className="bg-gradient-to-r from-[#541B9C] to-[#FB060B80] text-transparent bg-clip-text">
            EXPERT GUIDANCE
          </span>{" "}
          FOR LASTING IMPACT
        </h2>
        <p className="leading-7">
          Driving Excellence in Governance, Risk Management, Compliance (GRC),
          and Behavioral Skills Development for Banks, Financial Institutions,
          and MSMEs.
        </p>
        <button className="rounded-full py-4 px-10  mt-10 uppercase text-white bg-gradient-to-r from-[#541B9C] to-[#FB060B80] ">
          Get Started
        </button>
      </aside>
      <img src={HeroImg} alt="svl group" className="md:max-w-[50%]" />
    </section>
  );
}
