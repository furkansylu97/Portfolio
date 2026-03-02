import type { FC } from "react";

export interface TechIcon {
  src: string;
  alt: string;
  name: string;
}

interface TechStackProps {
  icons: TechIcon[];
}

const TechStack: FC<TechStackProps> = ({ icons }) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-white text-sm md:text-lg lg:text-xl">
        Profesyonel olarak kullandığım teknolojiler:
      </h2>

      <div
        className="
        flex flex-wrap justify-center w-full my-3 md:my-4 lg:my-5 gap-5 md:gap-6 lg:gap-10"
      >
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-6 md:w-8 lg:w-14 h-6 md:h-8 lg:h-14 object-contain"
            />

            <h3 className="hidden lg:block font-medium  mt-1">{icon.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
