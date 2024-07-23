import ArrowDown from "./icons/ArrowDown";

const ButtonScroll = () => {
  return (
    <>
      <button className="border border-txt px-[10px] py-5 rounded-3xl w-max">
        <div className="animate-bounce">
          <ArrowDown color="#ffffff" />
        </div>
      </button>
    </>
  );
};

export default ButtonScroll;
