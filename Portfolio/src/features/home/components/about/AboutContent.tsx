import type { FC } from "react";
import type { AboutText } from "../../data/about/aboutData";

interface AboutContentProps {
  content: AboutText;
}

const AboutContent: FC<AboutContentProps> = ({ content }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center border-2 border-cyan-500 rounded-2xl italic p-2 md:p-5 lg:p-8 gap-2 md:gap-4 lg:gap-5 overflow-hidden">
        {content.paragraphs.map((text, index) => (
          <p key={index} className="font-medium text-sm md:text-lg lg:text-xl">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
