import logo from "../assets/svl-logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-[#FEFEFE] text-sm py-2">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="cursor-pointer">
          <img src={logo} className="w-24 md:w-28" alt="SVL Logo" />
        </div>
        <nav className="cursor-pointer">
          <ul className="list-none flex items-center space-x-6 md:space-x-10 font-medium whitespace-nowrap">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
