import ArrowDown from "./icons/ArrowDown";
import { motion } from "framer-motion";

const ButtonScroll = () => {
  const fadeDownVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", delay: 1.5 } },
  };

  return (
    <>
      <motion.button
        variants={fadeDownVariants}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        className="border border-txt px-[10px] py-5 rounded-3xl w-max"
      >
        <div className="animate-bounce">
          <ArrowDown color="#ffffff" />
        </div>
      </motion.button>
    </>
  );
};

export default ButtonScroll;
