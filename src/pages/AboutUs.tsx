import aboutTeam from "../assets/about-team.png";
import VisionImg from "../assets/our-vision.png";
import teamwork from "../assets/teamwork.png";
import Overview from "../components/about/Overview";
import { Contact } from "../components/Contact";
import Container from "../components/Container";
import GradientContainer from "../components/GradientContainer";

const AboutUs = () => {
  return (
    <Container>
      <>
        <GradientContainer>
          <Overview text="About Us">
            <img
              className="w-full object-cover md:h-96 h-48"
              src={aboutTeam}
              alt="about team"
            />
          </Overview>
        </GradientContainer>
        <div className="my-14 md:my-28">
          <p className="my-2 md:my-4 text-sm md:text-base">
            At SVL CONSULTING LTD, we’re not just consultants—we’re partners in
            progress. Our mission is to empower banks, financial institutions,
            and MSMEs to unlock their full potential. By offering expert
            training and consulting in Governance, Risk Management, Compliance
            (GRC), and behavioral skills development, we don’t just solve
            problems—we pave the way for future success.
          </p>
          <p className="my-2 md:my-4 text-sm md:text-base">
            With a team of industry veterans—including financial economists,
            chartered accountants, seasoned bankers, and former regulators—our
            depth of knowledge ensures that you get solutions tailored precisely
            to your unique challenges. Each member of our team brings decades of
            hands-on experience, making us your trusted guide through complex
            financial and management landscapes.
          </p>
          <p className="my-2 md:my-4 text-sm md:text-base">
            At SVL CONSULTING, we believe learning is a life-long journey. Our
            approach is rooted in constant growth and innovation because in an
            ever-evolving world, the only way to stay ahead is to embrace
            change. Whether you're looking to sharpen your competitive edge or
            stay compliant in a complex regulatory environment, we are here to
            make that happen with you, every step of the way.
          </p>
          <p className="my-2 md:my-4 text-sm md:text-base">
            Our business is built on relationships, not transactions. We take
            pride in our client-centric approach, where your goals are our
            priority. Every solution we provide is designed to create lasting
            impact and meaningful results that propel your organization forward.
          </p>
        </div>
        <div className="mx-auto flex flex-col md:flex-row z-10 bg-[#F7F7F7] px-6 py-10 md:px-12 md:py-20 gap-5 relative items-center">
          <aside className="">
            <div>
              <h2 className="font-semibold text-xl md:text-3xl tracking-wider uppercase">
                Our Vision
              </h2>
              <span className="block justify-self-start bg-herobg z-10 w-[120px] h-[5px]"></span>
            </div>
            <p className="my-2 md:my-4">
              To be the leading catalyst for transformation in financial
              institutions and MSMEs, helping them navigate challenges and seize
              opportunities for growth.
            </p>
          </aside>
          <img
            src={VisionImg}
            alt="svl vision"
            className="md:max-w-[50%] w-full sm:w-[70%] md:w-[60%]"
          />
        </div>
        <div className="mx-auto flex flex-col md:flex-row z-10 py-10 md:py-20 gap-5 relative items-center">
          <section>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-4 md:mb-40">
                <aside>
                  <h2 className="font-semibold text-xl md:text-3xl tracking-wider uppercase min-w-max">
                    Key Highlight
                  </h2>
                  <span className="block justify-self-start bg-herobg z-10 w-[120px] h-[5px]"></span>
                </aside>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    A dedicated team with in-depth expertise to provide
                    personalized, measurable solutions.
                  </li>
                  <li>
                    Client-first approach ensuring that every engagement
                    delivers sustainable, lasting value.
                  </li>
                </ul>
              </div>

              {/* Middle Image */}
              <div className="flex justify-center">
                <img
                  src={teamwork}
                  alt="Teamwork"
                  className="rounded-full object-cover w-[200px] lg:w-auto md:max-w-[300px]"
                />
              </div>

              {/* Right Content */}
              <div className="space-y-4 md:mt-40">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Decades of industry experience across financial consulting,
                    governance, risk management, and compliance.
                  </li>
                  <li>
                    A philosophy of continuous learning and innovation to keep
                    our clients ahead of the curve.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <Contact />
      </>
    </Container>
  );
};

export default AboutUs;
