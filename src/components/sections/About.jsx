import { abouttext, roletitle } from "../../constans";
import Button from "../Button";
import TitleSection from "../TitleSection";
import Photo1 from "../../assets/photo-1.png";
import Photo2 from "../../assets/photo-2.png";

const About = () => {
  return (
    <section className="bg-primary relative px-[5%] md:px-[70px] py-40 w-full">
      <TitleSection section="ABOUT" title="WHO I AM" />
      <div className="w-full flex md:justify-end pt-32">
        <div className="flex flex-col w-full md:w-5/6 gap-32">
          <div className="flex flex-col md:flex-row justify-between gap-9 md:gap-0">
            <div className="w-full md:w-1/3 uppercase text-5xl md:text-heading font-semibold flex flex-col leading-none gap-2">
              {roletitle.map((item, index) => (
                <h2 key={index}>{item.label}</h2>
              ))}
            </div>
            <div className="w-full md:w-1/3">
              <div className="flex flex-col gap-5 mb-[50px]">
                {abouttext.map((item, index) => (
                  <p
                    key={index}
                    className="text-txt-muted text-base md:text-paragraph"
                  >
                    {item.text}
                  </p>
                ))}
              </div>
              <Button />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-9 md:gap-0">
            <div className="">
              <img src={Photo1} alt="" />
            </div>
            <div className="">
              <img src={Photo2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
