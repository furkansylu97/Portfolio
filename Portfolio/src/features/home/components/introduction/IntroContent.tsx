import type { FC } from "react";

interface IntroContentProps {
  name: string;
  slogan: string;
  description: string;
  careerText: string;
  onButtonClick: () => void;
}

export const IntroContent: FC<IntroContentProps> = ({
  name,
  slogan,
  description,
  careerText,
  onButtonClick,
}) => {
  return (
    <div className="w-full max-lg:my-auto">
      <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-serif">
        Hey, Ben <span>{name}</span>
      </h1>

      <h3 className="text-amber-400 text-xl md:text-3xl lg:text-4xl italic my-2 md:my-4 lg:my-5 h-8 lg:h-10 transition-all duration-500 ease-in-out">
        {careerText}
      </h3>

      <h2 className="text-green-500 text-base md:text-xl lg:text-2xl">
        "{slogan}"
      </h2>

      <p className="text-base md:text-lg lg:text-xl my-2 md:my-4 lg:my-5">
        {description}
      </p>

      <button
        type="button"
        className="border lg:border-2 border-cyan-950 bg-cyan-950/80 text-white text-base lg:text-xl font-normal lg:font-medium   max-lg:my-2 lg:mt-8 px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-5 rounded cursor-pointer motion-safe:hover:bg-cyan-800/50 transition-colors ease-in-out"
        onClick={onButtonClick}
      >
        Keşife Başlayın
      </button>
    </div>
  );
};
