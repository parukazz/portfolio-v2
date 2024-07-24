import { abouttext, roletitle } from "../../constans";
import Button from "../Button";
import TitleSection from "../TitleSection";

const About = () => {
  return (
    <section className="bg-primary relative px-[5%] md:px-[70px] py-40 w-full">
      <TitleSection section="ABOUT" title="WHO I AM" />
      <div className="w-full flex justify-end pt-16">
        <div className="flex w-5/6 h-96">
          <div className="flex justify-between">
            <div className="w-1/3 uppercase text-heading font-semibold flex flex-col leading-none gap-2">
              {roletitle.map((item, index) => (
                <h2 key={index}>{item.label}</h2>
              ))}
            </div>
            <div className="w-1/3">
              <div className="flex flex-col gap-5 mb-[50px]">
                {abouttext.map((item, index) => (
                  <p key={index} className="text-txt-muted text-paragraph">
                    {item.text}
                  </p>
                ))}
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
