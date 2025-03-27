import { Route, Routes } from "react-router";
import NavBar from "./sections/NavBar";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition";
import MainFooter from "./sections/MainFooter";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsCondition />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
