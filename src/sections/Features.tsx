import { featuresData } from "../data/appContent";
import bgIcon from "../assets/bg-logo-illustration.svg";
import illustrationImage from "../assets/illustration-image.png";

function Features() {
  const { mainFeatures, featuresText } = featuresData;

  return (
    <section id="features" className="section gap-[50px]">
      <img
        className="max-w-147.5 absolute top-[-47px] left-[-68px] opacity-80"
        src={bgIcon}
        alt=""
      />
      <div className="flex flex-col gap-5 py-2.5 items-center max-w-250">
        <h2 className="p-2.5 primary-heading">Features You Will Get</h2>
        <div className="flex p-2.5 gap-2.5 justify-center items-center secondary-heading">
          {mainFeatures.map((feature, index) => (
            <span
              className={`${
                index === 0
                  ? `text-[var(--primary-color)]`
                  : `${
                      index === 1
                        ? "text-[var(--error-color)]"
                        : "text-[var(--secondary-color)]"
                    }`
              }`}
              key={index}
            >
              {feature}
              {index !== mainFeatures.length - 1 && (
                <span className="text-[var(--font-color)]"> - </span>
              )}
            </span>
          ))}
        </div>

        <p className="p-2.5">{featuresText[0]}</p>
      </div>
      <img src={illustrationImage} alt="" className="max-w-250" />
    </section>
  );
}

export default Features;
