import { companyData } from "../data/companyData";
import bgIcon from "../assets/bg-logo-illustration.svg";

function ContactUs() {
  const { company } = companyData;

  return (
    <section className="relative max-w-250 w-full mx-auto z-2 bg-white px-2.5 py-20 rounded-[20px] flex flex-col gap-7.5 items-center justify-center  overflow-hidden shadow-[0px_0px_30px_0px_rgba(0,0,0,0.20)] mb-[-80px]">
      <img
        className="max-w-147.5 absolute rotate-[152.08deg] left-[-176px] top-[-6%]"
        src={bgIcon}
        alt=""
      />
      <div className="flex gap-2.5 items-center">
        <img src={company.logo} alt="" className="w-15 py-1.25 px-3.25" />
        <span className="text-[34px] font-semibold tracking-[-1.36px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
          {company.name}
        </span>
      </div>
      <div className="relative focus-within:outline focus-within:outline-[var(--secondary-color)]  flex justify-center max-w-175.5 w-full border py-2.5 pr-2.5 pl-7.5  border-[var(--secondary-color)] rounded-[20px] mx-5">
        <input
          type="email"
          placeholder="Enter your email address"
          className="focus:outline-none title-text font-extralight text-[var(--primary-color)] placeholder:text-[#67967b] block border-none bg-none w-full mr-2.5"
        />
        <button
          type="submit"
          title="Enter your email address"
          className="small-text font-semibold text-white bg-gradient-to-r from-[var(--primary-color)] to-[#67967B] px-10 py-6.25 rounded-[20px]"
        >
          Send
        </button>
      </div>
    </section>
  );
}

export default ContactUs;
