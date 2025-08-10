import { Contact } from "../components/Contact";
import Hero from "../components/home/Hero";
import WhatWeOffer from "../components/home/WhatWeOffer";
import WhoWeAre from "../components/home/WhoWeAre";
import WhyChooseSVL from "../components/home/WhyChooseSVL";
const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <WhyChooseSVL />
      <Contact />
      {/* Other home page content */}
    </div>
  );
};

export default Home;
