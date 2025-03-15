import NavBar from "./sections/NavBar";
import "./App.css";

// import { companyData } from "./data/companyData";
import HomePage from "./pages/HomePage";
// import Footer from "./sections/Footer";
import Footer2 from "./sections/Footer2";
import ContactUs from "./sections/ContactUs";

import bgIcon from "./assets/bg-logo-illustration.svg";
import { Route, Routes, BrowserRouter } from "react-router";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";

function App() {
  // const { partners } = companyData;

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsCondition />} />
      </Routes>
      {/* <aside className="p-2.5 z-5 flex mx-auto gap-2.5 absolute inset-x-0 rotate-[-8.29deg] bg-[var(--primary-color)] w-max text-white">
        {partners.map((partner) => (
          <div className="flex p-2.5 gap-2.5 items-center">
            <img src={partner?.image} alt="" className="rotate-[8.29deg]" />
            <span className="title-text"> {partner?.name}</span>
          </div>
        ))}
      </aside> */}
      {/* <HomePage /> */}
      <div className="bg-white relative">
        <ContactUs />
        <img
          className="max-w-147.5 absolute right-[-14%] top-[-9%]"
          src={bgIcon}
          alt=""
        />
        {/* <Footer /> */}
        <Footer2 />
      </div>
    </>
  );
}

export default App;
