
import services from "../assets/services.jpg"
const Services = () => {
  return (
   <div>
     <div className='mx-auto mb-4 mt-4'>
      <h2 className='uppercase font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-[#541B9C] to-[#FB060B80] text-center md:text-3xl text-base'>Services</h2>
    </div>
    {/* <div className='w-full md:px-32 px-6 mb-4'>
      <img className='bg-linear-to-r  from-[#541B9C] to-[#FB060B80]' src={services}/>
    </div> */}
 <div className="relative w-full md:px-32 px-6 mb-4">
  <div className="relative">
    <img
      className="w-full object-cover"
      src={services}
      alt="Services"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#541B9C] to-[#FB060B80] opacity-50"></div>
  </div>
</div>
 {/* Heading Section */}
 <div className="mx-auto mb-4 mt-4">
        <h2 className="uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#541B9C] to-[#FB060B80] text-center md:text-3xl text-base">
          Consulting Services at SVL Consulting
        </h2>
      </div>

      {/* Text Section */}
      <div className="text-center px-6 md:px-32 mb-8">
        <p className="text-gray-700">
          We don’t just provide knowledge—we deliver results. As your strategic
          business partners, we ensure that the skills and insights you gain
          during training are implemented to drive real business outcomes.
        </p>
      </div>

      {/* Our Approach Section */}
      <div className="md:px-32 px-6 mb-8">
        <h3 className="text-center text-xl font-bold mb-6">Our Approach:</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-2">Tailored Solutions</h4>
            <p className="text-gray-600">
              We bring together a team of specialists to deeply understand your
              challenges and provide customized solutions.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-2">Post-Training Support</h4>
            <p className="text-gray-600">
              After your training, we are always available to provide hands-on
              guidance, ensuring that the knowledge you gained translates into
              tangible business success.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="font-bold mb-2">Collaborative Teams</h4>
            <p className="text-gray-600">
              We assemble diverse teams from various disciplines to tackle your
              specific business challenges and provide lasting, practical
              solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Training Delivery Options Section */}
      <div className="md:px-32 px-6 mb-8">
        <h3 className="text-center text-xl font-bold mb-6">Training Delivery Options</h3>
        <p className="text-gray-700 mb-4 text-center">
          We offer flexible training delivery to meet your needs:
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Placeholder Container */}
          <div className="bg-gray-100 md:w-1/3 w-full h-32 rounded-lg"></div>

          {/* Content Section */}
          <div className="flex-1  p-6 ">
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <strong>In-Plant/In-House Training</strong> – Customized training
                delivered at your preferred location.
              </li>
              <li>
                <strong>Open Seminars/Public Courses</strong> – Join our public
                courses for industry-wide insights.
              </li>
              <li>
                <strong>Retreat Facilitation</strong> – Strengthen your team’s
                capabilities through immersive retreats.
              </li>
              <li>
                <strong>Custom Programs</strong> – Get a fully tailored training
                experience designed to meet your unique business needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;