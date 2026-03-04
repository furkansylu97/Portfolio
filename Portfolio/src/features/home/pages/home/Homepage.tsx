import AboutSection from "../../sections/about/AboutSection";
import ContactSection from "../../sections/contact/ContactSection";
import EducationSection from "../../sections/education/EducationSection";
import ExperienceSection from "../../sections/experience/ExperienceSection";
import { IntroSection } from "../../sections/introduction/IntroSection";
import ProjectsSection from "../../sections/projects/ProjectsSection";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#789a9f]">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
