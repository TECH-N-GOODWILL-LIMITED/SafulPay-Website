import { companyData } from "../data/companyData";
import DownloadItem from "../components/DownloadItem";
import mockupImage from "../assets/mockup-login-signup.png";

function Download() {
  const { downloads } = companyData;
  const { title, subtitle, text } = downloads;

  return (
    <section
      id="download"
      className="section max-w-400 py-12.5 px-50 flex-row bg-[var(--text-color)] text-white rounded-[50px]"
    >
      <div className="text-left">
        <h2 className="text-[64px] font-semibold tracking-[-2.56px] py-2.5 text-[var(--secondary-color)]">
          {title}
        </h2>
        <h3 className="secondary-heading py-2.5">{subtitle}</h3>
        <p className="py-2.5">{text}</p>
        <DownloadItem />
      </div>
      <img src={mockupImage} alt="" />
    </section>
  );
}

export default Download;
