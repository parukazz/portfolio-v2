import rectangleIcon from "../assets/icons/rectangle.svg";

// eslint-disable-next-line react/prop-types
const TitleSection = ({ section, title, titleCenter, sectionCenter }) => {
  const classes = `flex items-center gap-[10px] absolute top-0 bottom-0 left-0 right-0 ${
    titleCenter ? "justify-center" : "justify-start"
  }`;

  const sectionClasses = `relative flex ${
    sectionCenter ? "justify-center" : "justify-start"
  }`;

  return (
    <div className={sectionClasses}>
      <span className="font-extrabold text-6xl md:text-8xl bg-gradient-to-b from-zinc-600 to-zinc-950 bg-clip-text text-center">
        {section}
      </span>
      <div className={classes}>
        <img
          src={rectangleIcon}
          alt="icon"
          className="animate-spin-slow w-6 md:w-max"
        />
        <p className="text-base md:text-2xl font-medium">{title}</p>
        <img
          src={rectangleIcon}
          alt="icon"
          className={`animate-spin-slow w-6 md:w-max ${
            titleCenter && sectionCenter ? "inline-block" : "hidden"
          }`}
        />
      </div>
    </div>
  );
};

export default TitleSection;
