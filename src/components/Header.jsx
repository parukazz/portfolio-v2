import { useState } from "react";
import logo from "../assets/logo.png";
import { navigation } from "../constans";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  return (
    <header className={`fixed z-50 px-[5%] w-full lg:px-[70px] top-0 left-0`}>
      <nav className="flex justify-between items-center py-10">
        <div className="z-50">
          <img src={logo} alt="logo" />
        </div>
        <div
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-0 left-0 right-0 bottom-0 bg-primary md:bg-transparent md:static md:flex flex-col md:flex-row justify-end text-txt-muted uppercase gap-48 md:gap-[70px] px-[5%] pb-12 md:pb-0 md:px-0`}
        >
          <ul className="flex flex-col md:flex-row gap-5 md:gap-7">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="white-hover text-5xl md:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-max text-3xl md:text-base">
            <button className="uppercase white-hover">[look my resume]</button>
          </div>
        </div>
        <div className="md:hidden z-50 text-sm">
          <button
            onClick={toggleNavigation}
            className={`${openNavigation ? "hidden" : "inline-block"}`}
          >
            [MENU]
          </button>
          <button
            onClick={toggleNavigation}
            className={`${!openNavigation ? "hidden" : "inline-block"}`}
          >
            [CLOSE]
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
