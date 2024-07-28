/* eslint-disable react/prop-types */
import ArrowRight from "../components/icons/ArrowRight";

const Button = ({ href, label }) => {
  return (
    <a
      href={href}
      className="w-max -ml-2 flex items-center gap-1 text-paragraph font-semibold hover:translate-x-2 transition duration-200"
      target="_blank"
    >
      <ArrowRight className="fill-accent" size="24" />
      {label}
    </a>
  );
};

export default Button;
