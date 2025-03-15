import { featuresData } from "../data/appContent";
import FeatureItem from "../components/FeatureItem";
import bigRay from "../assets/big-ray-illustration.svg";

function MoreFeatures() {
  const { featuresText, moreFeatures } = featuresData;

  return (
    <section className="section pt-25 pb-50 flex rounded-t-[30px] gap-25 overflow-hidden relative flex-col items-center text-white">
      <div className="absolute w-full h-[67%] rounded-b-[60px] bg-[var(--primary-color)] top-0"></div>
      <img src={bigRay} alt="" className="w-185 absolute top-[-130px]" />

      <div className="z-2 flex flex-col gap-5">
        <h2 className="px-12.5 primary-heading">
          Explore Even More Powerful Features
        </h2>
        <p className="z-2 max-w-[1100px]">{featuresText[1]}</p>
      </div>
      <div className="flex gap-10 z-2 justify-center">
        {moreFeatures.map((feature, index) => (
          <FeatureItem
            key={index}
            index={index}
            title={feature.title}
            image={feature.image}
          />
        ))}
      </div>
    </section>
  );
}

export default MoreFeatures;
