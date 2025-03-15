import Features from "../sections/Features";
import MoreFeatures from "../sections/MoreFeatures";
import Security from "../sections/Security";
import Works from "../sections/Works";
import Testimonial from "../sections/Testimonial";
import Download from "../sections/Download";
import Faqs from "../sections/Faqs";
import Hero from "../sections/Hero";

function HomePage() {
  return (
    <>
      <Hero />
      <section className="container">
        <Features />
        <MoreFeatures />
        <Security />
        <Works />
        <Testimonial />
        <Download />
        <Faqs />
      </section>
    </>
  );
}

export default HomePage;
