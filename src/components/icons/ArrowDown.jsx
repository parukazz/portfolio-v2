// eslint-disable-next-line react/prop-types
const ArrowDown = ({ color = "currentColor", size = "10" }) => {
  return (
    <svg
      width={size}
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.09467 11.0947C0.801777 11.3876 0.801777 11.8624 1.09467 12.1553L7.34467 18.4053C7.63756 18.6982 8.11244 18.6982 8.40533 18.4053L14.6553 12.1553C14.9482 11.8624 14.9482 11.3876 14.6553 11.0947C14.3624 10.8018 13.8876 10.8018 13.5947 11.0947L8.625 16.0643L8.625 1.625C8.625 1.21079 8.28921 0.875 7.875 0.875C7.46079 0.875 7.125 1.21079 7.125 1.625L7.125 16.0643L2.15533 11.0947C1.86244 10.8018 1.38756 10.8018 1.09467 11.0947Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;
