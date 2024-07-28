import CSSIcon from "./icons/CSSIcon";
import JSIcon from "./icons/JSIcon";
import REACTIcon from "./icons/REACTIcon";
import TailwindIcon from "./icons/TailwindIcon";

const LogoSlider = () => {
  return (
    <div className="w-full flex justify-center py-16 overflow-hidden">
      <div className="flex space-x-7 md:space-x-16 justify-center">
        <CSSIcon className="fill-white group-hover:fill-accent" hover />
        <JSIcon className="fill-white group-hover:fill-accent" hover />
        <REACTIcon className="fill-white group-hover:fill-accent" hover />
        <TailwindIcon className="fill-white group-hover:fill-accent" hover />
      </div>
    </div>
  );
};

export default LogoSlider;
