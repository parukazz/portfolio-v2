/* eslint-disable react/prop-types */
const ArrowRight = ({ className, size = "10" }) => {
  const classes = `${className || ""}`;

  return (
    <svg
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.71967 18.7803C9.01256 19.0732 9.48744 19.0732 9.78033 18.7803L16.0303 12.5303C16.3232 12.2374 16.3232 11.7626 16.0303 11.4697L9.78033 5.21967C9.48744 4.92678 9.01256 4.92678 8.71967 5.21967C8.42678 5.51256 8.42678 5.98744 8.71967 6.28033L14.4393 12L8.71967 17.7197C8.42678 18.0126 8.42678 18.4874 8.71967 18.7803Z"
        className={classes}
      />
    </svg>
  );
};

export default ArrowRight;
