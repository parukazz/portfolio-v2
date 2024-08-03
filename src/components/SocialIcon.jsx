/* eslint-disable react/prop-types */
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

const SocialIcon = ({ iconSize = 24, white, gap, hidden }) => {

  const classes = `icon-hero ${white ? "fill-txt" : "fill-txt-muted"}`
  const dissapear = `${hidden ? "hidden" : ""}`;

  return (
    <div className={`flex w-max items-center ${gap} ${dissapear}`}>
      <a href="#">
        <GithubIcon className={classes} size={iconSize} />
      </a>
      <a href="#">
        <InstagramIcon className={classes} size={iconSize} />
      </a>
      <a href="#">
        <LinkedinIcon className={classes} size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcon;
