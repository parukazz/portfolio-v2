import rectangleIcon from "../assets/icons/rectangle.svg";

// eslint-disable-next-line react/prop-types
const TitleSection = ({ section, title }) => {
  return (
    <div className="relative">
      <span className="font-extrabold text-8xl bg-gradient-to-b from-zinc-600 to-zinc-950 bg-clip-text">
        {section}
      </span>
      <div className="flex items-center gap-[10px] absolute top-0 bottom-0 left-0">
        <img src={rectangleIcon} alt="icon" className="animate-spin-slow" />
        <p className="text-2xl font-medium">{title}</p>
      </div>
    </div>
  );
};

export default TitleSection;
