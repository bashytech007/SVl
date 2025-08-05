import logo from "../assets/image 2.svg";
import socials from "../assets/socialmedia.svg";

//   return (
//     <footer className="bg-black min-w-full min-h-[420px] py-10 md:px-56 ">
//       <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-28 py-10">
//         {/* Logo and Philosophy Section */}
//         <div className="space-y-2 max-w-md md:col-span">
//           <img src={logo} alt="SVL Consulting Logo" className="md:w-full w-40"  />
//           <p className="text-white text-sm leading-relaxed">
//             <span className="font-bold inline-block leading-tight">OUR PHILOSOPHY</span> - life-long learning
//             and self-improvement; embracing change as the only way to remain on top
//             of current challenges and be prepared for emerging business issues. Our
//             logo is a reflection of this philosophy.
//           </p>
//         </div>

//         <div className="text-white md:ml-40">
//           <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
//           <nav className="space-y-3">
//             <a href="/" className="block text-sm hover:text-gray-300">Home</a>
//             <a href="/about" className="block text-sm hover:text-gray-300">About Us</a>
//             <a href="/services" className="block text-sm hover:text-gray-300">Services</a>
//             <a href="/contact" className="block text-sm hover:text-gray-300">Contact</a>
//           </nav>
//         </div>

//         <div className="text-white">
//           <h3 className="font-semibold text-lg mb-4">Contact</h3>
//           <address className="text-sm not-italic leading-relaxed">
//             Garki Mall (Suite C004)<br />
//             Opposite Garki International Market<br />
//             Garki 2, Abuja. FCT.<br />
//             Nigeria
//           </address>
//           <span className="mt-8 inline-block">
//             +2348036590069, +2347012898670
//           </span>
//           <div className="flex items-center mt-4 cursor-pointer">
//           <img src={socials} className="w-36"/>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

export const Footer = () => {
  return (
    <div className="bg-[#000] ">
      <footer className=" mx-auto min-h-96 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-4">
          <img src={logo} alt="SVL Consulting Logo" className="w-40" />
          <div className="text-white">
            <h3 className="font-bold mb-2">OUR PHILOSOPHY</h3>
            <p className="text-sm leading-relaxed">
              life-long learning and self-improvement; embracing change as the
              only way to remain on top of current challenges and be prepared
              for emerging business issues. Our logo is a reflection of this
              philosophy.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="text-white md:ml-28">
          <h3 className="font-semibold text-lg mb-4">QUICK LINKS</h3>
          <nav className="space-y-3">
            <a
              href="/"
              className="block text-sm hover:text-gray-300 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-sm hover:text-gray-300 transition-colors"
            >
              About us
            </a>
            <a
              href="/services"
              className="block text-sm hover:text-gray-300 transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block text-sm hover:text-gray-300 transition-colors"
            >
              Contact us
            </a>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="text-white ">
          <h3 className="font-semibold text-lg mb-4">CONTACT</h3>
          <address className="text-sm not-italic leading-relaxed mb-4">
            Garki Mall (Suite C004) Opposite Garki
            <br />
            International Market Garki 2, Abuja. FCT.
            <br />
            Nigeria
          </address>
          <div className="space-y-4">
            <p className="text-sm">+2348036590069, +2347012898670</p>
            <div className="flex items-center gap-4">
              <img src={socials} alt="Social Media Icons" className="w-36" />
            </div>
          </div>
        </div>
      </footer>

      <div className="md:hidden text-white text-sm px-4 md:text-center py-4 md:border-t md:border-gray-800">
        © 2022 SVL Consulting Ltd. All Rights Reserved.
      </div>
    </div>
  );
};
