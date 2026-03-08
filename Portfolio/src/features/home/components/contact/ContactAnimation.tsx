import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ContactAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full object-contain">
      <DotLottieReact
        src="https://lottie.host/bc30ab51-61b9-4536-acd5-2a05e92187b9/N1rVjNDHMc.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default ContactAnimation;
