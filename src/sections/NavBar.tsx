// import { Link } from "react-router-dom";
// import { useNavigation } from "./useNavigation"; // Adjust the import path

// const Navbar = () => {
//   const handleNavigation = useNavigation();

//   const navLinks = [
//     { label: "Close App", url: "/" },
//     { label: "Features", url: "#features" },
//     { label: "How it Works", url: "#works" },
//     { label: "Testimonial", url: "#testimonials" },
//     { label: "FAQs", url: "#faqs" },
//     { label: "Contact Us", url: "/contact-us" },
//     { label: "About Us", url: "/about-us" },
//   ];

//   return (
//     <nav>
//       {navLinks.map((navLink) => (
//         <Link
//           key={navLink.label}
//           to={navLink.url}
//           onClick={(e) => {
//             e.preventDefault(); // Prevent default anchor behavior
//             handleNavigation(navLink.url);
//           }}
//           className="px-5"
//         >
//           {navLink.label}
//         </Link>
//       ))}
//     </nav>
//   );
// };

import { Link } from "react-router";
import { navLinks } from "../data/appContent";
import { companyData } from "../data/companyData";
// import { NavLink } from "react-router";
// import { NavLink, useLocation, useNavigate } from "react-router";

function NavBar() {
  const { company } = companyData;

  // const navigate = useNavigate();
  // const location = useLocation();

  // const handleNavigation = (url: string) => {
  //   if (!url.startsWith("/")) {
  //     // Handle section navigation (e.g., "features" -> "#features")
  //     const sectionId = url;

  //     if (location.pathname === "/") {
  //       const section = document.getElementById(sectionId);
  //       if (section) {
  //         const navbarHeight =
  //           document.querySelector("header")?.clientHeight || 0;
  //         window.scrollTo({
  //           top: section.offsetTop - navbarHeight,
  //           behavior: "smooth",
  //         });
  //       }
  //     } else {
  //       navigate("/").then(() => {
  //         const section = document.getElementById(sectionId);
  //         if (section) {
  //           const navbarHeight =
  //             document.querySelector("header")?.clientHeight || 0;
  //           window.scrollTo({
  //             top: section.offsetTop - navbarHeight,
  //             behavior: "smooth",
  //           });
  //         }
  //       });
  //     }
  //   } else {
  //     // Handle regular routing (e.g., "/about-us")
  //     navigate(url);
  //   }
  // };

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center z-99">
      <div className="mx-2.5 max-w-container-width w-full bg-[rgba(27,27,27,0.5)] backdrop-blur-[10px] p-5 my-2 rounded-[20px] flex justify-between items-center small-text font-semibold text-white">
        <Link to="/" className="flex gap-2.5 items-center">
          <img
            src={company.greenLogo}
            alt={company.name}
            className="w-15 px-3 py-1.25"
          />
          <p className="secondary-heading bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
            {company.name}
          </p>
        </Link>
        <nav>
          {navLinks.map((navLink, index) => (
            <a href={navLink.url} className="px-5" key={index}>
              {navLink.label}
            </a>
          ))}
          {/* {navLinks.map((navLink) => (
          <NavLink
            key={navLink.label}
            to={navLink.url}
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation(navLink.url);
            }}
            className="px-5"
          >
            {navLink.label}
          </NavLink>
        ))} */}
        </nav>
        <a
          href="#download"
          className="px-7.5 py-4.25 rounded-[10px] bg-secondary-color text-primary-color"
        >
          Download App
        </a>
      </div>
    </header>
  );
}

export default NavBar;
