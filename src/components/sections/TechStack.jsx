import LogoSlider from "../LogoSlider";
import TitleSection from "../TitleSection";

const TechStack = () => {
  return (
    <section className="bg-primary relative px-[5%] md:px-[70px] py-40 w-full">
      <TitleSection
        section="TECH STACK"
        title="WHAT I USE"
        sectionCenter
        titleCenter
      />
      <LogoSlider />
    </section>
  );
};

export default TechStack;
