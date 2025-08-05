import ArrowRight from "../assets/arrow_right.png";
import EllipseBg from "../assets/ellipses.png";
import Container from "./Container";

const WhatWeOffer = () => {
  return (
    <Container>
      <section className="w-full bg-[#fefefe] relative">
        <div>
          <img
            src={EllipseBg}
            alt="ellipse"
            className="w-[400px] absolute pointer-events-none right-[-10%] bottom-[-20%]"
          />
          <img
            src={EllipseBg}
            alt="ellipse"
            className="w-[200px] absolute pointer-events-none top-[0%]"
          />
          <img
            src={EllipseBg}
            alt="ellipse"
            className="w-[200px] absolute pointer-events-none right-[0%]"
          />
          <img
            src={EllipseBg}
            alt="ellipse"
            className="w-[800px] absolute pointer-events-none right-[10%] top-[-20%]"
          />
          <img
            src={EllipseBg}
            alt="ellipse"
            className="w-[800px] absolute pointer-events-none right-[10%] top-[-25%]"
          />
          <img
            src={EllipseBg}
            alt="ellipse"
            className="w-[400px] absolute pointer-events-none top-[50%]"
          />
        </div>
        <div className="lg:w-[90%] w-full mx-auto flex flex-col z-10 relative">
          <div className="pt-24">
            <h2 className="font-semibold text-3xl tracking-wider">
              WHAT WE OFFER
            </h2>
            <span className="block justify-self-start bg-herobg z-10 w-[120px] h-[5px]"></span>
          </div>
          <p className="py-6">
            At SVL Consulting, we specialize in transforming organizations
            through expert-led Training and Consulting Services. Our services
            empower banks, financial institutions, and MSMEs to thrive in the
            areas of Governance, Risk Management, Compliance (GRC), and
            Behavioral Skills.
          </p>
          <div className="flex w-full gap-10 mx-5 max-w-full flex-col lg:flex-row">
            <aside className="w-full lg:w-[75%]">
              <div className="bg-[#ffffff4f] px-16 py-5 rounded-lg">
                <h4>Training Services</h4>
                <ul className="list-disc ml-10">
                  <li>Accounting & Finance</li>
                  <li>Governance & Risk Management</li>
                  <li>Banking Operations</li>
                  <li>Internal Auditing</li>
                  <li>MSMEs Development</li>
                  <li>Soft Skills & Behavioral Training</li>
                </ul>
                <a
                  href="#"
                  className="underline uppercase flex items-center gap-2 text-sm"
                >
                  <span>learn more</span>
                  <img src={ArrowRight} alt="arrow right" />
                </a>
              </div>
            </aside>
            <aside className="">
              <div className="bg-[#ffffff4f] w-fit px-16 py-5 rounded-lg">
                <h4>Consulting Services</h4>
                <ul className="list-disc ml-10">
                  <li>
                    <h5>Strategic Business Consulting</h5> – Tailored solutions
                    that address your most pressing business challenges.
                  </li>
                  <li>
                    <h5>Post-Training Support</h5> – Hands-on guidance to
                    implement the skills learned in training for long-term
                    success.
                  </li>
                  <li>
                    <h5>Custom Programs</h5> – Specialist teams to provide
                    personalized and enduring solutions.
                  </li>
                </ul>
                <a
                  href="#"
                  className="underline uppercase flex items-center gap-2 text-sm"
                >
                  <span>explore</span>{" "}
                  <img src={ArrowRight} alt="arrow right" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WhatWeOffer;
