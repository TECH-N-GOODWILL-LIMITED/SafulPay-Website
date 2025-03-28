import expandIcon from "../assets/expand-icon.svg";
import collapseIcon from "../assets/collapse-icon.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleFAQ: () => void;
}

function FaqItem({ question, answer, isOpen, toggleFAQ }: FaqItemProps) {
  const [parent] = useAutoAnimate();

  return (
    <div
      className="grid grid-cols-[1fr_auto] text-left max-w-277.5 w-full p-2.5 items-center bg-[#ffffff0d] rounded-[50px]"
      ref={parent}
    >
      <span className="small-text font-semibold py-2.5 px-7.5">{question}</span>
      <button
        onClick={toggleFAQ}
        className="rounded-[50px] bg-[#c3f02c33] p-5"
        ref={parent}
      >
        <img
          src={isOpen ? collapseIcon : expandIcon}
          alt=""
          className="w-5 h-5"
        />
      </button>
      {isOpen && (
        <p className="small-text max-w-200 py-2.5 px-7.5 col-span-full">
          {answer}
        </p>
      )}
    </div>
  );
}

export default FaqItem;
