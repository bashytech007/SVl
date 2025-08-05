import Container from "./Container";

const WhoWeAre = () => {
  return (
    <Container>
      <section className="bg-[url('public/who_we_are.png')] w-full lg:min-h-[500px] min-h-fit relative bg-top bg-cover text-[#fff] ">
        <div className="bg-black/50 backdrop-brightness-100 absolute inset-0 pointer-events-none mx-auto z-1"></div>
        <div className="lg:w-[80%] w-full mx-auto flex flex-col z-10 relative">
          <div className="pt-24 mx-auto">
            <h2 className="font-semibold text-3xl tracking-wider text-white">
              WHO WE ARE
            </h2>
            <span className="block justify-self-start bg-herobg z-10 w-[120px] h-[5px]"></span>
          </div>
          <p className="px-5 md:px-10 lg:px-20 py-6 text-center">
            At SVL CONSULTING LTD, we’re not just consultants—we’re partners in
            progress. Our mission is to empower banks, financial institutions,
            and MSMEs to unlock their full potential. By offering expert
            training and consulting in Governance, Risk Management, Compliance
            (GRC), and behavioral skills development, we don’t just solve
            problems—we pave the way for future success.
          </p>
          <button className="mx-auto my-10 text-center rounded-full px-12 py-2 bg-gradient-to-r from-[#551b9c] to-[#fb060abd] ">
            READ MORE
          </button>
        </div>
        {/* <img src={WhoWeAreImg} className="brightness-[0.6]" alt="who we are" /> */}
      </section>
    </Container>
  );
};

export default WhoWeAre;
