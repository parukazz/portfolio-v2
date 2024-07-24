import ArrowRight from "../components/icons/ArrowRight";

const Button = () => {
  return (
    <button className="w-max -ml-2 flex items-center gap-1 text-paragraph font-semibold hover:translate-x-2 transition duration-200">
      <ArrowRight className="fill-accent" size="24" />
      LET&apos;S TALK
    </button>
  );
};

export default Button;
