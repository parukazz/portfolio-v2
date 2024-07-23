import { quoteHero, tagline } from "../../constans";
import ButtonScroll from "../ButtonScroll";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import Header from "../Header";
import ParticlesComponent from "../ParticlesComponent";

const Hero = () => {
  return (
    <div className="text-txt px-[5%] lg:px-[70px]">
      <ParticlesComponent />
      <Header />
      <div className="relative w-full min-h-screen flex items-end pb-12 md:pb-24">
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4 md:gap-0">
          <div className="uppercase font-extrabold leading-none text-6xl md:text-brand">
            <h1>paruk</h1>
            <h1>azziyi</h1>
          </div>
          <div className="w-full md:w-[400px] text-center md:text-start">
            <p className="hidden md:inline-block text-base md:text-2xl font-medium mb-[14px]">
              {tagline}
            </p>
            <p className="mx-[15%] md:mx-0 text-sm md:text-paragraph leading-7 text-txt-muted">
              {quoteHero}
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center mt-16 gap-[30px]">
              <ButtonScroll />
              <div className="flex items-center gap-5">
                <a href="#">
                  <GithubIcon className="icon-hero" size="24" />
                </a>
                <a href="#">
                  <InstagramIcon className="icon-hero" size="24" />
                </a>
                <a href="#">
                  <LinkedinIcon className="icon-hero" size="24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
