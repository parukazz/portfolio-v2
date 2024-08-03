import TitleSection from "../TitleSection";
import mailBox from "../../assets/illustrations/mailbox.png";
import { myMail } from "../../constans";
import SocialIcon from "../SocialIcon";
import { useEffect, useState } from "react";

const Contact = () => {
  const [iconSize, setIconSize] = useState(window.innerWidth < 768 ? 48 : 120);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth < 768 ? 48 : 120);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="bg-primary relative px-[5%] md:px-[70px] py-16 pt-40 w-full">
      <TitleSection section="CONTACT" title="GET IN TOUCH" />
      <div className="flex flex-col md:flex-row gap-9 md:gap-0">
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col gap-10 md:gap-20 mt-9 md:mt-0">
            <div className="w-max">
              <h2 className="font-semibold text-4xl md:text-6xl">{myMail}</h2>
              <div className="w-full h-[3px] bg-txt mt-3"></div>
            </div>
            <div>
              <SocialIcon iconSize={iconSize} white gap="gap-16" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={mailBox} alt="mail illustrations" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
