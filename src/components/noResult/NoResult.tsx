import Lottie from "lottie-react";
import anim from "./NoResultsAnimation.json";

export const NoResult = () => {
  return <Lottie animationData={anim} loop={true} />;
};
