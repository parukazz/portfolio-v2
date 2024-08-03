import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Credit from "./components/sections/Credit";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Credit />
    </div>
  );
};

export default App;
