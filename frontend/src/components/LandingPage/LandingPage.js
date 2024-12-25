import React from "react";
import ImageSlider from "./ImageSlider.js";
import AboutSection from "./AboutSection.js";
import ContactSection from "./ContactSection.js";
import Stats from "./Stats.js";
import VisionMission from "./VisionSection.js";
import CurriculumOverview from "./CurriculamOverview.js";

const LandingPage = () => {
  return (
    <div>
      <ImageSlider />
      <AboutSection />
      <Stats />
      <VisionMission />
      <CurriculumOverview />
      <ContactSection />
    </div>
  );
};

export default LandingPage;
