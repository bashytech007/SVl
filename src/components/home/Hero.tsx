import HeroImg from "../../assets/svl-hero-img.png";
import Button from "../../ui/Button";
import Container from "../Container";

export default function Hero() {
  return (
    <Container className="flex gap-6 flex-1 justify-center items-center flex-col md:flex-row pt-10 md:pt-0">
      <>
        <aside className="md:max-w-[50%]">
          <h2 className="font-bold text-4xl">
            <span className="bg-gradient-to-r from-[#541B9C] to-[#fb060abd] text-transparent bg-clip-text">
              EXPERT GUIDANCE
            </span>{" "}
            FOR LASTING IMPACT
          </h2>
          <p className="leading-7">
            Driving Excellence in Governance, Risk Management, Compliance (GRC),
            and Behavioral Skills Development for Banks, Financial Institutions,
            and MSMEs.
          </p>
          <Button text="Get Started" className="text-white" />
        </aside>
        <img src={HeroImg} alt="svl group" className="md:max-w-[50%] w-[60%]" />
      </>
    </Container>
  );
}
