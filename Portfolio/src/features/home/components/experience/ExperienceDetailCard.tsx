import type { FC } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { ExperienceCard as ExperienceCardType } from "../../data/experience/experienceData";

interface ExperienceCardProps {
  card: ExperienceCardType;
  index: number;
}

const ExperienceDetailCard: FC<ExperienceCardProps> = ({ card, index }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <motion.div
      id={`experience-${card.id}`}
      initial={
        isDesktop ? { opacity: 0, x: index % 2 === 0 ? -120 : 120 } : false
      }
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      viewport={{ once: false, margin: "-100px" }}
      className="bg-cyan-800/50 block lg:flex p-2 md:p-4 lg:p-6 border-2 border-cyan-950 rounded-sm"
    >
      <div className="flex lg:flex-1 items-center justify-center">
        <img
          src={card.icon}
          alt={card.title}
          className="h-24 md:h-32 lg:h-[80%] object-contain"
        />
      </div>

      <div className="flex flex-col flex-2">
        <h2 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 px-4">
          {card.title}
        </h2>
        <h2 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 px-4">
          {card.location}
        </h2>

        <h3 className="text-base lg:text-lg font-semibold px-4">
          {card.company}
        </h3>

        <h4 className="text-base px-4 mb-2">{card.location}</h4>

        <ul className="text-base lg:text-lg text-gray-300 leading-relaxed space-y-1">
          {card.description.split("\n").map((line, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="font-extrabold text-cyan-400">•</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceDetailCard;
