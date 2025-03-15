import { useState } from "react";
import { faqsData } from "../data/appContent";
import FaqItem from "../components/FaqItem";
import bgIcon from "../assets/bg-logo-illustration.svg";

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default: first item is open

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const { title, intro, faqs } = faqsData;

  return (
    <section id="faqs" className="section py-2.5 px-5 gap-2.5 relative mb-50">
      <img
        src={bgIcon}
        alt=""
        className="absolute left-[-370px] top-[10%] max-w-147.5 opacity-80"
      />
      <h2 className="py-2.5 text-[64px] font-semibold tracking-[-2.56px] text-[var(--primary-color)] max-w-275">
        {title}
      </h2>
      <p className="py-2.5 text-[20px] font-normal max-w-175">{intro}</p>
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          toggleFAQ={() => toggleFAQ(index)}
        />
      ))}
    </section>
  );
}

export default Faqs;
