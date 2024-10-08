/* eslint-disable react/prop-types */
const CSSIcon = ({ className, hover }) => {
  const classes = `${className || ""}`;
  const classesSVG = `group w-[67.5px] md:w-[120px] ${
    hover ? "hover:scale-105 hover:-rotate-12 transition duration-300" : ""
  }`;

  return (
    <svg
      viewBox="0 0 120 121"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classesSVG}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M93.6 96.5978L60 106.198L26.4 96.5978L19.2 14.9978H100.8C98.4 42.1947 96 69.4009 93.6 96.5978ZM95.5594 19.7978H24.4406L30.8906 92.8853L60 101.21L89.1094 92.8853L95.5594 19.7978ZM40.3219 67.7978H49.9219L50.1562 73.7978L60 77.154L69.8437 73.7978L70.5562 62.9978H49.4437L48.9562 53.3978H71.0437L71.7562 43.7978H38.6437L37.9219 34.1978H81.8437L80.6437 53.3978L78.9562 80.9978L60 87.2415L41.0437 80.9978L40.3219 67.7978Z"
        className={classes}
      />
    </svg>
  );
};

export default CSSIcon;
