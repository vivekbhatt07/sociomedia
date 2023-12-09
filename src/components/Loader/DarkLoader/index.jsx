import React from "react";
import Lottie from "lottie-react";
import DarkLoaderLottie from "../../../assets/Lottie/DarkLoaderLottie.json";

const DarkLoader = () => (
  <div className="w-20 h-20 mx-auto">
    <Lottie animationData={DarkLoaderLottie} loop={true} />
  </div>
);

export default DarkLoader;
