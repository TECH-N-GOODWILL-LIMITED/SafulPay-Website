// import mockUpImage from "../assets/mockup-homepage.png";
import { companyData } from "../data/companyData";
import DownloadItem from "../components/DownloadItem";
import mockUpImage from "../assets/mockup-home-page.png";

function Hero() {
  const { company } = companyData;

  return (
    <section className="section gap-10 min-h-[80vh]">
      <div className="py-2.5 flex flex-col gap-2.5 text-white items-center mt-50">
        <h1 className="max-w-275 p-2.5 text-[100px] font-bold tracking-[-3px] leading-none">
          {company.slogan}
          <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
            {company.name}
          </span>
        </h1>
        <p className="secondary-heading font-normal p-2.5 max-w-250">
          {company.description}
        </p>
        <DownloadItem />
      </div>
      <div className="max-w-111">
        <img src={mockUpImage} alt="" />
      </div>
    </section>
  );
}

export default Hero;

// import { useState, useEffect } from "react";
// import throttle from "lodash.throttle";

// const MyComponent = () => {
//   const [hasScrolled, setHasScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = throttle(() => {
//       const heroSection = document.getElementById("hero-section");
//       if (heroSection) {
//         const heroHeight = heroSection.offsetHeight;
//         if (window.scrollY > heroHeight) {
//           setHasScrolled(true);
//         } else {
//           setHasScrolled(false);
//         }
//       }
//     }, 100); // Throttle to 100ms

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
