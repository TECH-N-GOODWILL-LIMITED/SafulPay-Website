import { companyData } from "../data/companyData";

function Partners() {
  const { partners } = companyData;

  return (
    <div>
      <aside
        className="p-2.5 z-5 flex mx-auto gap-2.5 absolute rotate-[-8.29deg] bg-primary-color w-full
       text-white overflow-hidden"
      >
        {partners.map((partner) => (
          <div className="flex p-2.5 gap-2.5 items-center">
            <img src={partner?.image} alt="" className="rotate-[8.29deg]" />
            <span className="title-text"> {partner?.name}</span>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default Partners;
