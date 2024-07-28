import About from "./components/sections/About";
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
    </div>
  );
};

export default App;
