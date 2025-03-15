import absoluteImage from "../assets/ray-illustration.svg";

interface FeatureProps {
  index: number;
  title: string;
  image?: string;
}

function FeatureItem({ index, image, title }: FeatureProps) {
  return (
    <div
      className={`max-w-[387px] flex flex-col relative items-center gap-20 bg-[var(--offwhite)] rounded-[50px] p-12.5 pb-0 ${
        index === 1 && "pt-0"
      }`}
      key={index}
    >
      <img
        src={absoluteImage}
        alt=""
        className={`absolute w-85.25 ${
          index === 1 ? "top-[232px]" : "top-[167px]"
        }`}
      />

      {index !== 1 && (
        <p className="title-text text-[var(--text-color)] p-2.5">{title}</p>
      )}

      <img src={image} alt="" className="w-75 z-1" />

      {index === 1 && (
        <p className="title-text text-[var(--text-color)] p-2.5">{title}</p>
      )}
    </div>
  );
}

export default FeatureItem;
