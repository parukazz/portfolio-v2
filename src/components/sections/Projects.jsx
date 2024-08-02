import { projects } from "../../constans";
import Button from "../Button";
import TitleSection from "../TitleSection";

const Projects = () => {
  return (
    <section className="bg-accent relative px-[5%] md:px-[70px] py-20 w-full">
      <div className="bg-primary w-full py-12 rounded-2xl">
        <TitleSection section="PROJECTS" title="MY WORKS" paddingX />
        {projects.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row py-16 px-16 justify-between items-center gap-32"
          >
            <div className="flex flex-col w-1/2 gap-[72px]">
              <div className="flex flex-col items-end">
                <h2 className="text-5xl md:text-heading font-semibold pr-10 leading-tight mb-11">
                  {item.title}
                </h2>
                <Button label="GO TO LINK" href={item.link} />
              </div>
              <div className="w-full flex justify-end">
                <div className="flex justify-between gap-14">
                  <div className="font-semibold text-paragraph leading-6 flex flex-col gap-6">
                    <p>Category:</p>
                    <p>Tech Stack:</p>
                    <p>Github Repo:</p>
                  </div>
                  <div className="text-txt-muted text-base leading-6 text-right flex flex-col gap-6">
                    <p>{item.category}</p>
                    <p>{item.tech}</p>
                    <a
                      href={item.linkRepo}
                      className="hover:text-txt transition duration-300"
                      target="_blank"
                    >
                      {item.repo}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img src={item.img} alt={item.alt} className="rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
