import account from "../assets/account.jpg";
import banking from "../assets/banking-woman.png";
import Collaboration from "../assets/collaboration.png";
import GraphicalPresentation from "../assets/GraphicalPresentation.png";
import grc from "../assets/grc.jpg";
import InnovativeBox from "../assets/InnovativeBox.png";
import audit from "../assets/internal-audit.png";
import mmse from "../assets/mmse.png";
import services from "../assets/services.jpg";
import Overview from "../components/about/Overview";
import { Contact } from "../components/Contact";
import Container from "../components/Container";
import GradientContainer from "../components/GradientContainer";
import GradientUnderlined from "../components/GradientUnderlined";
import Programme from "../components/services/Programme";

const Services = () => {
  return (
    <Container>
      <>
        <GradientContainer>
          <Overview text="Services">
            <img
              className="w-full object-cover md:h-96 h-48"
              src={services}
              alt="services"
            />
          </Overview>
        </GradientContainer>
        <div>
          <div className="mt-6 md:mt-16 mb-6 md:mb-6">
            <h2 className="font-semibold text-xl md:text-3xl tracking-wider uppercase">
              Consulting Services at SVL Consulting
            </h2>
            <span className="block justify-self-start bg-herobg z-10 w-[120px] h-[5px]"></span>
          </div>

          <div className="mb-8">
            <p className="text-gray-700">
              We don’t just provide knowledge—we deliver results. As your
              strategic business partners, we ensure that the skills and
              insights you gain during training are implemented to drive real
              business outcomes.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl mb-6 tracking-wide">Our Approach:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <aside className="p-6 rounded-lg shadow-sm">
                <img
                  className="mb-4 shadow-sm px-4 py-2"
                  src={InnovativeBox}
                  alt="innovative box"
                />
                <h4 className="font-bold mb-2">Tailored Solutions</h4>
                <p className="text-gray-600">
                  We bring together a team of specialists to deeply understand
                  your challenges and provide customized solutions.
                </p>
              </aside>

              <aside className="p-6 rounded-lg shadow-sm">
                <img
                  src={GraphicalPresentation}
                  alt="presentation"
                  className="mb-4 shadow-sm px-4 py-2"
                />
                <h4 className="font-bold mb-2">Post-Training Support</h4>
                <p className="text-gray-600">
                  After your training, we are always available to provide
                  hands-on guidance, ensuring that the knowledge you gained
                  translates into tangible business success.
                </p>
              </aside>
              <aside className="p-6 rounded-lg shadow-sm">
                <img
                  src={Collaboration}
                  alt="collaboration"
                  className="mb-4 shadow-sm px-4 py-2"
                />
                <h4 className="font-bold mb-2">Collaborative Teams</h4>
                <p className="text-gray-600">
                  We assemble diverse teams from various disciplines to tackle
                  your specific business challenges and provide lasting,
                  practical solutions.
                </p>
              </aside>
            </div>
          </div>

          <div className="mb-8">
            <GradientUnderlined text="Training programme at SVL consulting" />
            <p className="my-4">
              We offer comprehensive training solutions across key areas of
              corporate governance, risk management, finance, and personal
              development. Our programs are designed to provide immediate,
              actionable skills that enhance both individual and organizational
              performance.
            </p>
            <p className="mb-10">
              We offer flexible training delivery to meet your needs:
            </p>
          </div>

          <div>
            <Programme title="Accounting and Finance" img={account}>
              <>
                <li>Accounting for Non-Financial Managers</li>
                <li>Personal Financial Management</li>
                <li>Cash Flow Management</li>
                <li>And more...</li>
              </>
            </Programme>

            <Programme
              title="Governance, Risk Management & Compliance (GRC)"
              img={grc}
              reverseRow
            >
              <>
                <li>
                  Corporate Governance & Risk Management– Build a strong,
                  compliant corporate governance framework.
                </li>
                <li>
                  Enterprise Risk Management (ERM) – Learn how to capture
                  opportunities while managing risks.
                </li>
                <li>
                  Business Process Improvement– Improve operational efficiency
                  through structured processes.
                </li>
                <li>And more...</li>
              </>
            </Programme>

            <Programme title="Banking Operations & Management" img={banking}>
              <>
                <li>
                  Customer Relationship Management (CRM)– Optimize client
                  relationships to drive profitability.
                </li>
                <li>
                  Credit Risk Management – Reduce exposure and manage credit
                  risk effectively.
                </li>
                <li>
                  Operational Risk Management in Retail Banking– Strengthen
                  operational resilience in retail banking.
                </li>
                <li>And more...</li>
              </>
            </Programme>
            <Programme title="Internal Auditing" img={audit} reverseRow>
              <>
                <li>
                  Cyber Risk Management Audit– Ensure robust defense against
                  cybersecurity threats.
                </li>
                <li>
                  Strategic Auditing – Transition from compliance-focused to
                  strategy-driven auditing.
                </li>
                <li>
                  Forensic Auditing and Investigations– Detect and prevent fraud
                  within your organization.
                </li>
                <li>And more...</li>
              </>
            </Programme>

            <Programme title="MSMEs Development" img={mmse}>
              <>
                <li>
                  Preparing a Business Plan– Craft a winning business plan that
                  attracts investors.
                </li>
                <li>
                  Valuation of Small Businesses – Learn how to accurately value
                  your small business.
                </li>
                <li>
                  Accessing Venture Capital– Unlock the secrets to securing
                  venture capital funding.
                </li>
                <li>And more...</li>
              </>
            </Programme>
          </div>
          <Contact />
        </div>
      </>
    </Container>
  );
};

export default Services;
