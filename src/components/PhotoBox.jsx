/* eslint-disable react/prop-types */
const PhotoBox = ({ classBox, classImg, src, alt }) => {
  const classesBox = `overflow-hidden ${classBox} transition duration-300`;
  const classesImg = `${classImg} transition duration-300`;

  // group hover:scale-95 hover:-rotate-2 transition duration-300
  // group-hover:scale-110

  return (
    <div className={classesBox}>
      <img src={src} alt={alt} className={classesImg} />
    </div>
  );
};

export default PhotoBox;
