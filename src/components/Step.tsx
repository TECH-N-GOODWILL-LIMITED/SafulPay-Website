import bgIcon from "../assets/bg-logo-illustration.svg";
import lineImage from "../assets/line-illustration.svg";
import circleSvg from "../assets/circle-bg.svg";

interface StepProps {
  index: number;
  icon: string;
  title: string;
  description: string;
}

function Step({ index, icon, title, description }: StepProps) {
  return (
    <>
      {index === 1 && <img src={lineImage} alt="" />}
      {index === 2 && (
        <img src={lineImage} alt="" className="rotate-180 scale-x-[-1]" />
      )}
      <div className="max-w-87.5 flex flex-col gap-2.5 self-start" key={index}>
        <div className="flex items-center justify-center relative">
          <img src={circleSvg} alt="" className="w-20 h-20" />
          <span className="absolute">{index + 1}</span>
        </div>
        <div className="flex relative flex-col justify-center px-7.5 items-center pt-10 pb-5 gap-2.5  bg-[var(--primary-opacity-fade)] rounded-[30px]">
          <img
            className="max-w-147.5 absolute rotate-[133.24deg]"
            src={bgIcon}
            alt=""
          />
          <img src={icon} alt="icon image" className="w-15 h-15" />
          <h4 className="title-text py-2.5">{title}</h4>
          <p className="small-text py-2.5">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Step;
