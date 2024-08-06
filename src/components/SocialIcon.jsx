/* eslint-disable react/prop-types */
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { delay, motion } from "framer-motion";

const SocialIcon = ({ iconSize = 24, white, gap, hidden }) => {
  const classes = `icon-hero ${white ? "fill-txt" : "fill-txt-muted"}`;
  const dissapear = `${hidden ? "hidden" : ""}`;

  const fadeDownVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={`flex w-max items-center ${gap} ${dissapear}`}
    >
      <motion.a variants={fadeDownVariants} href="#">
        <GithubIcon className={classes} size={iconSize} />
      </motion.a>
      <motion.a variants={fadeDownVariants} href="#">
        <InstagramIcon className={classes} size={iconSize} />
      </motion.a>
      <motion.a variants={fadeDownVariants} href="#">
        <LinkedinIcon className={classes} size={iconSize} />
      </motion.a>
    </motion.div>
  );
};

export default SocialIcon;
