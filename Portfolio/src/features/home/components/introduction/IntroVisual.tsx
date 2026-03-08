import type { FC } from "react";
import user from "../../../../assets/images/user.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const IntroVisual: FC = () => {
  return (
    <div className="flex lg:relative justify-center items-center max-lg:border-2 max-lg:rounded-4xl max-lg:border-cyan-950 max-lg:bg-cyan-800/50">
      <div className="hidden lg:block overflow-hidden">
        <DotLottieReact
          src="https://lottie.host/cabdeee3-446f-45c7-8b94-fd24423a2df6/TCT2VSJmUO.lottie"
          loop
          autoplay
          className="h-116"
        />
      </div>

      <div className="p-2 md:p-8 lg:p-0 overflow-hidden lg:absolute z-10 w-full h-full flex items-center justify-center">
        <img
          src={user}
          alt="Furkan Soylu"
          className="w-[65%] md:w-[45%] lg:w-[70%] aspect-square object-contain"
        />
      </div>
    </div>
  );
};
