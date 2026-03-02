import { Container } from "../../../../shared/components/container/Container";
import AboutAnimation from "../../components/about/AboutAnimation";
import AboutContent from "../../components/about/AboutContent";
import TechStack from "../../components/about/TechStack";

import { aboutText } from "../../data/about/aboutData";
import icons from "../../data/about/iconsData";

const AboutSection = () => {
  return (
    <Container>
      <section id="about-section" className="h-dvh">
        <div className="grid lg:grid-cols-2 w-full h-7/10 lg:h-6/10 gap-4 md:gap-5 lg:gap-0">
          <AboutAnimation />
          <AboutContent content={aboutText} />
        </div>

       <div className="h-3/10 lg:h-4/10 py-2 md:py-5 lg:py-8">
         <TechStack icons={icons} />
       </div>
      </section>
    </Container>
  );
};

export default AboutSection;
