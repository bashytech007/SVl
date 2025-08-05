import { Contact } from "../components/Contact";
import Hero from "../components/Hero";
import WhatWeOffer from "../components/WhatWeOffer";
import WhoWeAre from "../components/WhoWeAre";
const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <Contact />
      {/* Other home page content */}
    </div>
  );
};

export default Home;
