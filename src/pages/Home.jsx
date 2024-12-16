import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Services />
      <Work />
      <Projects />
      <Pricing />
      <Testimonials />
      <FAQs />
      <Contact />
    </div>
  );
};

export default Home;
