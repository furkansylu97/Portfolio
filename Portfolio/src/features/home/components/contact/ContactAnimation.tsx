import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ContactAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full object-contain">
      <DotLottieReact
        src="../../../../../public/contactAnimation.json"
        loop
        autoplay
      />
    </div>
  );
};

export default ContactAnimation;
