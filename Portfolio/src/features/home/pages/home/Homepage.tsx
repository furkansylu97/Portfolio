import AboutSection from "../../sections/about/AboutSection";
import { IntroSection } from "../../sections/introduction/IntroSection";

const HomePage = () => {
  return (
    <>
      <div className="bg-[#789a9f]">
        <IntroSection />
        <AboutSection />
      </div>
    </>
  );
};

export default HomePage;
