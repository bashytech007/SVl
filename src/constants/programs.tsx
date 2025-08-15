import account from "../assets/account.jpg";
import banking from "../assets/banking-woman.png";
import grc from "../assets/grc.jpg";
import audit from "../assets/internal-audit.png";
import msme from "../assets/mmse.png";

type programType = {
  title: string;
  img: string;
  content: React.ReactElement;
};

export const programs: programType[] = [
  {
    title: "Accounting and Finance",
    img: account,
    content: (
      <>
        <li>Accounting for Non-Financial Managers</li>
        <li>Personal Financial Management</li>
        <li>Cash Flow Management</li>
        <li>And more...</li>
      </>
    ),
  },
  {
    title: "Governance, Risk Management & Compliance (GRC)",
    img: grc,
    content: (
      <>
        <li>
          Corporate Governance & Risk Management– Build a strong, compliant
          corporate governance framework.
        </li>
        <li>
          Enterprise Risk Management (ERM) – Learn how to capture opportunities
          while managing risks.
        </li>
        <li>
          Business Process Improvement– Improve operational efficiency through
          structured processes.
        </li>
        <li>And more...</li>
      </>
    ),
  },
  {
    title: "Banking Operations & Management",
    img: banking,
    content: (
      <>
        <li>
          Customer Relationship Management (CRM)– Optimize client relationships
          to drive profitability.
        </li>
        <li>
          Credit Risk Management – Reduce exposure and manage credit risk
          effectively.
        </li>
        <li>
          Operational Risk Management in Retail Banking– Strengthen operational
          resilience in retail banking.
        </li>
        <li>And more...</li>
      </>
    ),
  },
  {
    title: "Internal Auditing",
    img: audit,
    content: (
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
          Forensic Auditing and Investigations– Detect and prevent fraud within
          your organization.
        </li>
        <li>And more...</li>
      </>
    ),
  },
  {
    title: "MSMEs Development",
    img: msme,
    content: (
      <>
        <li>
          Preparing a Business Plan– Craft a winning business plan that attracts
          investors.
        </li>
        <li>
          Valuation of Small Businesses – Learn how to accurately value your
          small business.
        </li>
        <li>
          Accessing Venture Capital– Unlock the secrets to securing venture
          capital funding.
        </li>
        <li>And more...</li>
      </>
    ),
  },
];
