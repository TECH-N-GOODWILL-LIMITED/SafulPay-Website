import NavBar from "../sections/NavBar";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import MoreFeatures from "../sections/MoreFeatures";
import Security from "../sections/Security";
import Works from "../sections/Works";
import Testimonial from "../sections/Testimonial";
import Download from "../sections/Download";
import Faqs from "../sections/Faqs";
// import Partners from "../components/Partners";
import ContactUs from "../sections/ContactUs";
import Footer2 from "../sections/Footer2";
import bgIcon from "../assets/bg-logo-illustration.svg";

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <Partners /> */}
      <main>
        <Features />
        <MoreFeatures />
        <Security />
        <Works />
        <Testimonial />
        <Download />
        <Faqs />
      </main>
      <div className="bg-white relative flex flex-col items-center overflow-x-clip">
        <ContactUs />
        <img
          className="max-w-147.5 absolute right-[-14%] top-[-9%] max-md:max-w-120 max-sm:max-w-100 opacity-80"
          src={bgIcon}
          alt=""
        />
        <Footer2 />
      </div>
    </>
  );
}

export default HomePage;
