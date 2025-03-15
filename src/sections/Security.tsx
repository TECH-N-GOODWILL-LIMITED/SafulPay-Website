import { securityData } from "../data/appContent";
import { companyData } from "../data/companyData";
import SecurityFeature from "../components/SecurityFeature";
import bgIcon from "../assets/bg-logo-illustration.svg";

function Security() {
  const { regulated } = companyData;
  const { title, intro, securityFeatures } = securityData;

  return (
    <section className="section pt-50 gap-10 relative">
      <h2 className="primary-heading font-bold p-2.5 tracking-[-2.1px]">
        {title}
      </h2>
      <p className="py-2.5 max-w-275 mx-12.5">{intro}</p>
      <div className="max-w-250 flex flex-col gap-2.5 px-7.5 py-5 bg-[var(--primary-opacity-fade)] rounded-[30px] items-center justify-center relative overflow-hidden">
        <img
          className="max-w-147.5 absolute opacity-40 rotate-[133.24deg]"
          src={bgIcon}
          alt=""
        />
        <img
          src={regulated?.icon}
          alt="regulation bank icon"
          className="w-15"
        />
        <p className="px-50 py-2.5">{regulated?.text}</p>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-10 max-w-282">
        {securityFeatures.map((feature, index) => (
          <SecurityFeature
            key={index}
            index={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <img
        className="max-w-147.5 absolute bottom-[-2%] right-[-28%] opacity-80"
        src={bgIcon}
        alt=""
      />
    </section>
  );
}

export default Security;
