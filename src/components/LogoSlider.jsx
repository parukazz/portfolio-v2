import { logoTech } from "../constans";

const LogoSlider = () => {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="flex w-max space-x-16 ">
        {logoTech.map((item, index) => (
          <img key={index} src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
