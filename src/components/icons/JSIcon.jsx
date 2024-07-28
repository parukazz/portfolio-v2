/* eslint-disable react/prop-types */
const JSIcon = ({ className, hover }) => {
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
        d="M16.0031 10.198C12.4969 10.198 9.60001 13.0949 9.60001 16.6011V104.595C9.60001 108.101 12.4969 110.998 16.0031 110.998H103.997C107.503 110.998 110.4 108.111 110.4 104.595V16.6011C110.4 13.0949 107.513 10.198 103.997 10.198H16.0031ZM16.0031 14.998H103.997C104.888 14.998 105.6 15.7105 105.6 16.6011V104.595C105.6 105.486 104.888 106.198 103.997 106.198H16.0031C15.1125 106.198 14.4 105.486 14.4 104.595V16.6011C14.4 15.7105 15.1125 14.998 16.0031 14.998ZM55.2 55.798V85.9761C55.2 90.6074 53.4469 91.798 50.4 91.798C47.2125 91.798 45 89.8105 43.5375 87.2324L36 91.798C38.1844 96.4199 43.5375 101.398 50.9625 101.398C59.175 101.398 64.8 97.0293 64.8 87.4386V55.798H55.2ZM85.0875 55.798C76.9125 55.798 71.6719 61.0293 71.6719 67.9011C71.6719 75.3542 76.0688 78.8792 82.6781 81.6917L84.9656 82.6761C89.1375 84.5042 91.2 85.6199 91.2 88.7605C91.2 91.3761 89.2125 93.2699 85.4156 93.2699C80.8969 93.2699 78.7594 90.2043 76.8 86.998L69.6 91.798C72.2906 97.1136 77.1188 101.398 85.6219 101.398C94.3219 101.398 100.8 96.8792 100.8 88.6386C100.8 80.9886 96.4125 77.5855 88.6219 74.248L86.3344 73.273C82.4063 71.5668 80.7 70.4605 80.7 67.7136C80.7 65.4918 82.4063 63.7855 85.0875 63.7855C87.7219 63.7855 89.4094 64.9011 90.975 67.7136L98.1094 63.1386C95.1 57.823 90.9094 55.798 85.0875 55.798Z"
        className={classes}
      />
    </svg>
  );
};

export default JSIcon;
