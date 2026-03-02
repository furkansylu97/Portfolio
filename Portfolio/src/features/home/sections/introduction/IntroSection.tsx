import type { FC } from "react";
import { IntroContent } from "../../components/introduction/IntroContent";
import { IntroVisual } from "../../components/introduction/IntroVisual";
import { useTypewriter } from "../../hooks/introduction/useTypewriter";
import { careerTitles, introTexts } from "../../data/introduction/introData";
import { Container } from "../../../../shared/components/container/Container";

export const IntroSection: FC = () => {
  const typedText = useTypewriter({
    words: careerTitles,
  });

  const handleGetStartedClick = (): void => {
    const section = document.getElementById("about-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container className="lg:order-b-2 border-cyan-950">
      <section className="max-lg:h-[calc(100dvh-8rem)] lg:h-[calc(100dvh-10rem)] w-full">
        <div className="h-full flex flex-col lg:grid lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex lg:items-center max-lg:h-6/10">
            <IntroContent
              name={introTexts.name}
              slogan={introTexts.slogan}
              description={introTexts.description}
              careerText={typedText}
              onButtonClick={handleGetStartedClick}
            />
          </div>

          <div className="order-1 lg:order-2 flex items-center justify-center max-lg:h-4/10">
            <IntroVisual />
          </div>
        </div>
      </section>
    </Container>
  );
};
