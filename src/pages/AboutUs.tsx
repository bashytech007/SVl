// import services from "../assets/services.jpg"

// const AboutUs = () => {
//   return (
//     <div>
//         <div className='mx-auto mb-4 mt-4'>
//       <h2 className='uppercase font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-[#541B9C] to-[#fb060abd] text-center md:text-3xl text-base'>Services</h2>
//     </div>
//     {/* <div className='w-full md:px-32 px-6 mb-4'>
//       <img className='bg-linear-to-r  from-[#541B9C] to-[#fb060abd]' src={services}/>
//     </div> */}
//  <div className="relative w-full md:px-32 px-6 mb-4">
//   <div className="relative">
//     <img
//       className="w-full object-cover md:h-96 h-48"
//       src={services}
//       alt="Services"
//     />
//     <div className="absolute inset-0 bg-gradient-to-r from-[#541B9C] to-[#fb060abd] opacity-50"></div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default AboutUs

import account from "../assets/account.jpg";
import grc from "../assets/grc.jpg";
import services from "../assets/services.jpg";

const AboutUs = () => {
  return (
    <div className="mx-auto mt-4 ">
      <h2 className="uppercase font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-[#541B9C] to-[#fb060abd] text-center md:text-3xl text-base">
        Services
      </h2>

      <div className="relative w-full md:px-32 px-6 mb-4 mt-4 ">
        <div className="relative">
          <img
            className="w-full object-cover md:h-96 h-48"
            src={services}
            alt="Services"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#541B9C] to-[#fb060abd] opacity-50"></div>
        </div>
      </div>

      <div className="min-w-840px">
        <div className="md:px-28 px-6 flex gap-4 justify-around items-center mb-4 ">
          <div className="px-6">
            <h3 className="md:text-xl font-semibold mb-2">
              Accounting and Finance
            </h3>
            <div className="w-full">
              <img src={account} className="md:w-[464px] object-cover" />
            </div>
          </div>
          <div>
            <div>
              <ul className="list-disc pl-6 text-sm md:text-base mt-16 md:space-y-2 text-nowrap">
                <li>Accounting for Non-Financial Managers</li>
                <li>Personal Financial Management</li>
                <li>Cash Flow Management</li>
                <li>And more...</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:px-28 px-6 flex justify-around gap-4 items-center mb-4">
          <div className="px-10">
            <h3 className="md:text-xl font-semibold -mb-12 ">
              Governance, Risk Management & Compliance (GRC)
            </h3>
            <ul className="list-disc md:pl-6 text-sm md:text-base mt-16 md:space-y-2 text-nowrap">
              <li>Accounting for Non-Financial Managers</li>
              <li>Personal Financial Management</li>
              <li>Cash Flow Management</li>
              <li>And more...</li>
            </ul>
          </div>
          <div className="w-full mt-28">
            <img src={grc} className="md:w-[464px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
