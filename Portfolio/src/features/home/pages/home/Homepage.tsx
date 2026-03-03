import AboutSection from "../../sections/about/AboutSection";
import EducationSection from "../../sections/education/EducationSection";
import ExperienceSection from "../../sections/experience/ExperienceSection";
import { IntroSection } from "../../sections/introduction/IntroSection";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#789a9f]">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </>
  );
};

export default HomePage;
