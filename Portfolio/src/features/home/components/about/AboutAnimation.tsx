import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const AboutAnimation = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-[30vh] md:h-[35vh] lg:h-[40vh] w-full">
        <DotLottieReact
          src="../../../../../public/aboutAnimation.json"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default AboutAnimation;
