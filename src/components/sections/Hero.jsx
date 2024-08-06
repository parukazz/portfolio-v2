import { quoteHero, tagline } from "../../constans";
import ButtonScroll from "../ButtonScroll";
import Header from "../Header";
import ParticlesComponent from "../ParticlesComponent";
import SocialIcon from "../SocialIcon";
import { motion } from "framer-motion";

const Hero = () => {
  const popUpElements = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 1, 1.01],
    },
  };

  return (
    <div className="text-txt px-[5%] lg:px-[70px]">
      <ParticlesComponent />
      <Header />
      <div className="relative w-full min-h-screen flex items-end pb-12 md:pb-24">
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4 md:gap-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 1, 1.01],
            }}
            className="uppercase font-extrabold leading-none text-6xl md:text-brand"
          >
            <h1>paruk</h1>
            <h1>azziyi</h1>
          </motion.div>
          <div className="w-full md:w-[400px] text-center md:text-start">
            <motion.p 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 1, 1.01],
            }}
            className="hidden md:inline-block text-base md:text-2xl font-medium mb-[14px]">
              {tagline}
            </motion.p>
            <motion.p 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 1, 1.01],
            }}
            className="mx-[15%] md:mx-0 text-sm md:text-paragraph leading-7 text-txt-muted">
              {quoteHero}
            </motion.p>
            <div className="flex flex-col-reverse md:flex-row items-center mt-16 gap-[30px]">
              <ButtonScroll />
              <SocialIcon gap="gap-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
