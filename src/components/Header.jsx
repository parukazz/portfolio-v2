import logo from "../assets/logo.png";
import { useEffect } from "react";
import particlesJS from "particles.js";
import particlesJSConfig from "../assets/particle/particlesjs-config.json";

const Header = () => {

  useEffect(() => {
    particlesJS.load('particles-js', particlesJSConfig, () => {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return (
    <header className="container fixed top-0 left-0 right-0" id="particles-js">
      <nav className="flex justify-between items-center py-10">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex text-txt-muted uppercase gap-[70px]">
          <ul className="flex gap-7">
            <li>
              <a href="#" className="white-hover">
                about
              </a>
            </li>
            <li>
              <a href="#" className="white-hover">
                projects
              </a>
            </li>
            <li>
              <a href="#" className="white-hover">
                contact
              </a>
            </li>
          </ul>
          <div className="border-b border-b-txt-muted">
            <button className="uppercase white-hover">download resume</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
