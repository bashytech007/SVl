


export const Hero = () => {
  return (
    <main className="bg-image text-white bg-gradient-to-r min-h-80 from-[#541B9C80] via-[#541B9C80] to-[#FB060B40] max-w-full flex flex-col items-center mt-4 space-x-1 justify-center">
      <h2 className="font-bold md:font-semibold mt-8 text-2xl md:text-4xl mb-4">
        Let's shape your path to success
      </h2>
      <div className="mt-2 font-light md:font-normal text-sm md:text-xl">
        <p className="">Discover your tailored solutions and expert guidance</p>
        <p className="flex justify-center">Get in Touch with us today</p>
      </div>
      <div className="mt-5 mb-5">
        <button className="outline-white px-12 py-2 border-2 rounded-full">
          Contact US
        </button>
      </div>
    </main>
  );
};