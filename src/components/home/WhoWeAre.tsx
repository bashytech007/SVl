import Button from "../../ui/Button";
import Container from "../Container";
import GradientUnderlined from "../GradientUnderlined";

const WhoWeAre = () => {
  return (
    <Container>
      <section className="bg-[url('/who_we_are.png')] w-full lg:min-h-[500px] min-h-fit relative bg-top bg-cover text-[#fff] ">
        <div className="bg-black/50 backdrop-brightness-100 absolute inset-0 pointer-events-none mx-auto z-1"></div>
        <div className="lg:w-[80%] w-full mx-auto flex flex-col z-10 relative">
          <GradientUnderlined
            text="Who We Are"
            className="text-[#fff]"
            wrapperClassName="mx-auto"
          />
          <p className="px-5 md:px-10 lg:px-20 py-6 text-center">
            At SVL CONSULTING LTD, we’re not just consultants—we’re partners in
            progress. Our mission is to empower banks, financial institutions,
            and MSMEs to unlock their full potential. By offering expert
            training and consulting in Governance, Risk Management, Compliance
            (GRC), and behavioral skills development, we don’t just solve
            problems—we pave the way for future success.
          </p>
          <Button text="READ MORE" className="mx-auto" />
        </div>
        {/* <img src={WhoWeAreImg} className="brightness-[0.6]" alt="who we are" /> */}
      </section>
    </Container>
  );
};

export default WhoWeAre;
