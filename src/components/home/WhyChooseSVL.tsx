import handshake from "../../assets/handshake.png";
import Container from "../Container";
import GradientContainer from "../GradientContainer";

const WhyChooseSVL = () => {
  return (
    <Container>
      <GradientContainer>
        <div className="lg:w-[90%] w-full mx-auto flex flex-col z-10 relative">
          <div className="pt-24">
            <h2 className="font-semibold text-xl md:text-3xl tracking-wider">
              WHY CHOOSE SVL CONSULTING
            </h2>
            <span className="block justify-self-start bg-herobg z-10 w-[120px] h-[5px]"></span>
          </div>
          <section className="py-16">
            <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] md:gap-x-6 md:gap-y-4 items-center justify-items-center max-w-4xl mx-auto">
              {/* Top Left */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-10 h-10 md:w-20 md:h-20  rounded-full bg-gray-300 mb-2"></div>
                <h3 className="font-semibold text-base md:text-xl">
                  Expert Trainers
                </h3>
                <p className="text-sm md:text-lg text-gray-600">
                  Our experienced bankers, economists, and auditors provide deep
                  industry insights.
                </p>
              </div>

              {/* Top Center (empty space) */}
              <div></div>

              {/* Top Right */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-gray-300 mb-2"></div>
                <h3 className="font-semibold text-base md:text-xl">
                  Tailored to you
                </h3>
                <p className="text-sm md:text-lg text-gray-600">
                  We customize training to fit Nigeria's business realities
                  while adopting global best practices.
                </p>
              </div>

              {/* Middle Left (empty space) */}
              <div></div>

              {/* Center Image */}
              <div className="flex justify-center">
                <img
                  src={handshake}
                  alt="Handshake"
                  className="rounded-full object-cover w-[100px] md:w-[150px] lg:w-auto md:max-w-[300px]"
                />
              </div>

              {/* Middle Right (empty space) */}
              <div></div>

              {/* Bottom Left */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-gray-300 mb-2"></div>
                <h3 className="font-semibold text-base md:text-xl">
                  Immediate application
                </h3>
                <p className="text-sm md:text-lg text-gray-600">
                  Our "train to use" model ensures you can apply your learning
                  right away.
                </p>
              </div>

              {/* Bottom Center (empty space) */}
              <div></div>

              {/* Bottom Right */}
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-gray-300 mb-2"></div>
                <h3 className="font-semibold text-base md:text-xl">
                  Practical & real-life
                </h3>
                <p className="text-sm md:text-lg text-gray-600">
                  All courses are grounded in real-life scenarios to enhance
                  learning.
                </p>
              </div>
            </div>
          </section>
        </div>
      </GradientContainer>
    </Container>
  );
};

export default WhyChooseSVL;
