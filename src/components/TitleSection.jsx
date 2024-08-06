/* eslint-disable react/prop-types */
import rectangleIcon from "../assets/icons/rectangle.svg";
import { motion } from "framer-motion";

const TitleSection = ({
  section,
  title,
  titleCenter,
  sectionCenter,
  paddingX,
}) => {
  const classes = `flex items-center gap-[10px] absolute top-0 bottom-0 left-0 right-0 ${
    titleCenter ? "justify-center" : "justify-start"
  } ${paddingX ? "px-8" : ""}`;

  const sectionClasses = `relative flex ${
    sectionCenter ? "justify-center" : "justify-start"
  } ${paddingX ? "px-8" : ""}`;

  const fadeRightVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0, 0.71, 1, 1.01] },
    },
  };

  return (
    <motion.div
      variants={fadeRightVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={sectionClasses}
    >
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
    </motion.div>
  );
};

export default TitleSection;
