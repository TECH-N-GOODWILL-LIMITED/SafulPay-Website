import { companyData } from "../data/companyData";
import { featuresData, footerData } from "../data/appContent";
// import ContactUs from "./ContactUs";
import DownloadItem from "../components/DownloadItem";
import bgIcon from "../assets/bg-logo-illustration.svg";

function Footer2() {
  const { company, socials, regulated } = companyData;
  const { featuresText } = featuresData;
  const { footerLinks, copyright, otherLinks } = footerData;

  return (
    // <section className="bg-white w-screen">
    <footer className="rounded-t-[50px] bg-[#1B1B1B] text-white text-start">
      <div className="grid grid-cols-[1fr_auto] justify-between items-center max-w-300.5 mx-auto px-2.5 pt-37.5 pb-25">
        <div className="max-w-175 flex flex-col gap-2.5 items-start z-20">
          <div className="flex gap-2.5 items-center">
            <img src={company.logo} alt="" className="w-30 px-6.5 py-2.5" />
            <span className="text-[64px] font-semibold tracking-[-1.92px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
              {company.name}
            </span>
          </div>
          <h1 className="max-w-275 p-2.5 text-[34px] font-semibold tracking-[-1.36px] leading-none">
            {company.slogan}
            <span className="text-[var(--primary-color)] ">{company.name}</span>
          </h1>
          <p className="small-text p-2.5">{featuresText[2]}</p>
          <DownloadItem />
        </div>
        <div className="flex gap-12.5 ">
          {footerLinks.map((links, index) => (
            <div className="flex flex-col gap-1.25" key={index}>
              <h2 className="title-text p-2.5">{links.category}</h2>
              {links.links.map((link, index) => (
                <a
                  href={link.url}
                  className="small-text py-1.25 px-2.5"
                  key={index}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center col-span-full ">
          <div className="flex flex-col max-w-97.5 gap-2.5 p-2.5">
            <p className="p-2.5 title-text">Connect With Us</p>
            <div className="flex items-center gap-1.25">
              {socials.map((social, index) => (
                <a
                  href={social.url}
                  key={index}
                  className="w-12.5 p-2.5 bg-[var(--primary-opacity-fade)] rounded-full hover:bg-[var(--primary-color)]"
                >
                  <img src={social.icon} alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className="relative flex gap-5 w-79 rounded-[30px] py-5 px-7.5 items-center justify-center overflow-hidden bg-[var(--primary-opacity-fade)]">
            <img
              className="max-w-147.5 absolute opacity-40 rotate-[133.24deg]"
              src={bgIcon}
              alt=""
            />
            <img
              src={regulated.icon}
              alt=""
              className="w-10 filter grayscale invert"
            />
            <span className="text-[16px] font-semibold py-2.5">
              {regulated.text}
            </span>
          </div>
        </div>
        <div className="mt-2.5 flex justify-between items-center col-span-full text-[18px] tracking-[-0.18px] border-t border-white ">
          <p className="pb-2.5 pt-5 font-normal">
            {copyright}
            <span className="text-[var(--secondary-color)]">
              {company.name}
            </span>
          </p>
          <div>
            {otherLinks.map((link) => (
              <a href={link.url} className="py-2.5 px-7.5 font-semibold">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    // </section>
  );
}

export default Footer2;

// {/* <section className="px-2.5 pt-37.5 pb-25 max-w-300.5 mx-auto text-white z-1 rounded-t-[50px] bg-[#1B1B1B] w-screen">
// {/* <div className="absolute max-w-screen w-full h-[950px] bottom-0 rounded-t-[50px] bg-[#1B1B1B]"></div> */}
// {/* <ContactUs /> */}
// {/* <footer className="px-2.5 pt-37.5 pb-25 max-w-300.5 mx-auto text-white z-1 rounded-t-[50px] bg-[#1B1B1B] w-screen"> */}
// {/* <footer className="max-w-300 gap-8.5 pb-25 mx-auto text-white text-start z-1"> */}
// <div className="grid grid-cols-[1fr_auto] justify-between items-center">
//   <div className="max-w-175 flex flex-col gap-2.5 items-start z-20">
//     <div className="flex gap-2.5 items-center">
//       <img src={company.logo} alt="" className="w-30 px-6.5 py-2.5" />
//       <span className="text-[64px] font-semibold tracking-[-1.92px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
//         {company.name}
//       </span>
//     </div>
//     <h1 className="max-w-275 p-2.5 text-[34px] font-semibold tracking-[-1.36px] leading-none">
//       {company.slogan}
//       <span className="text-[var(--primary-color)] ">{company.name}</span>
//     </h1>
//     <p className="small-text p-2.5">{featuresText[2]}</p>
//     <DownloadItem />
//   </div>
//   <div className="flex gap-12.5 ">
//     {footerLinks.map((links, index) => (
//       <div className="flex flex-col gap-1.25" key={index}>
//         <h2 className="title-text p-2.5">{links.category}</h2>
//         {links.links.map((link, index) => (
//           <a
//             href={link.url}
//             className="small-text py-1.25 px-2.5"
//             key={index}
//           >
//             {link.label}
//           </a>
//         ))}
//       </div>
//     ))}
//   </div>
//   <div className="flex justify-between items-center col-span-full ">
//     <div className="flex flex-col max-w-97.5 gap-2.5 p-2.5">
//       <p className="p-2.5 title-text">Connect With Us</p>
//       <div className="flex items-center gap-1.25">
//         {socials.map((social, index) => (
//           <a
//             href={social.url}
//             key={index}
//             className="w-12.5 p-2.5 bg-[var(--primary-opacity-fade)] rounded-full hover:bg-[var(--primary-color)]"
//           >
//             <img src={social.icon} alt="" />
//           </a>
//         ))}
//       </div>
//     </div>
//     <div className="relative flex gap-5 w-79 rounded-[30px] py-5 px-7.5 items-center justify-center overflow-hidden bg-[var(--primary-opacity-fade)]">
//       <img
//         className="max-w-147.5 absolute opacity-40 rotate-[133.24deg]"
//         src={bgIcon}
//         alt=""
//       />
//       <img src={regulated.icon} alt="" className="w-10" />
//       <span className="text-[16px] font-semibold py-2.5">
//         {regulated.text}
//       </span>
//     </div>
//   </div>
//   <div className="mt-2.5 flex justify-between items-center col-span-full text-[18px] tracking-[-0.18px] border-t border-white ">
//     <p className="pb-2.5 pt-5 font-normal">
//       {copyright}
//       <span className="text-[var(--secondary-color)]">
//         {company.name}
//       </span>
//     </p>
//     <div>
//       {otherLinks.map((link) => (
//         <a href={link.url} className="py-2.5 px-7.5 font-semibold">
//           {link.label}
//         </a>
//       ))}
//     </div>
//   </div>
// </div>
// {/* </footer> */}
// {/* </footer> */}
// </section> */}
