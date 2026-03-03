import type { FC } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { ExperienceCard as ExperienceCardType } from "../../data/experience/experienceData";

interface ExperienceCardProps {
  card: ExperienceCardType;
  index: number;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ card, index }) => {
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

      <div className="flex flex-col flex-2 justify-center">
        <h2 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2">
          {card.title}
        </h2>
        <h2 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2">
          {card.location}
        </h2>

        <h3 className="text-base lg:text-lg font-semibold">{card.company}</h3>

        <h4 className="text-base">{card.location}</h4>

        <p className="line-clamp-3 my-2">{card.description}</p>

        <span className="mt-2 md:mt-4 lg:mt-8">
          <Link
            to={`/experience/${card.slug}`}
            className="border-2 rounded-sm font-medium text-sm lg:text-base bg-cyan-800/90 text-amber-400 py-2 px-3 md:px-4 lg:px-5 inline-block motion-safe:hover:scale-105 ease-in-out transition"
          >
            Daha Fazlası
          </Link>
        </span>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
