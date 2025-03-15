import { companyData } from "../data/companyData";

function DownloadItem() {
  const { downloads } = companyData;
  const { appStore, playStore } = downloads;

  return (
    <div className="flex gap-2.5 w-96 py-5 text-[var(--text-color)]">
      <a href={playStore.link}>
        <div className="flex py-2.5 px-5 bg-white rounded-[15px]">
          <img src={playStore.image} alt="" className="w-7.5" />
          <div className="px-2.5">
            <span className="text-[12px] font-normal block">
              Available on the
            </span>
            <span className="text-[18px] font-semibold tracking-[-0.18px]">
              Play Store
            </span>
          </div>
        </div>
      </a>
      <a href={appStore.link}>
        <div className="flex justify-center items-center py-2.5 px-5.25 bg-white rounded-[15px]">
          <img src={appStore.image} alt="" className="w-7.5" />
          <div className="px-2.5">
            <span className="text-[12px] font-normal block">
              Available on the
            </span>
            <span className="text-[18px] font-semibold tracking-[-0.18px]">
              Apple Store
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default DownloadItem;
