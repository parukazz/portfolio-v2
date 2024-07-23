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
      <div className="relative w-full min-h-screen flex items-end pb-24">
        <div className="flex w-full items-center justify-between gap">
          <div className="uppercase font-extrabold leading-none">
            <h1 className="text-brand">paruk</h1>
            <h1 className="text-brand">azziyi</h1>
          </div>
          <div className="w-[400px]">
            <p className="text-2xl font-medium mb-[14px]">{tagline}</p>
            <p className="text-paragraph leading-7 text-txt-muted">
              {quoteHero}
            </p>
            <div className="flex mt-16 gap-[30px]">
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
