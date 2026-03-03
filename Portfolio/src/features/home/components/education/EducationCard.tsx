import type { FC } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { EducationCard as EducationCardType } from "../../data/education/educationData";

interface EducationCardProps {
  card: EducationCardType;
  index: number;
}

const EducationCard: FC<EducationCardProps> = ({ card, index }) => {
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
      whileInView={{ opacity: 1, x: 0 }}
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
          alt={card.department}
          className="h-24 md:h-32 lg:h-[80%] object-contain"
        />
      </div>

      <div className="flex flex-col flex-3 justify-center">
        <h2 className="text-base md:text-lg lg:text-xl text-center font-bold text-white mb-2">
          {card.department} {card.language}
        </h2>

        <h3 className="text-base lg:text-lg text-center font-semibold">
          {card.school}
        </h3>

        <h4 className="text-base text-center opacity-80">{card.location}</h4>
      </div>
    </motion.div>
  );
};

export default EducationCard;
