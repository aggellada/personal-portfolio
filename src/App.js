import { useRef } from "react";
import "./App.css";
import LandingPage from "./components/Landing/LandingPage";
import Navigation from "./components/Landing/Navigation";
import ProjectsPage from "./components/Projects/ProjectsPage";

import { useMotionTemplate, useMotionValue, useInView } from "framer-motion";
import NavigationSticky from "./components/Landing/NavigationBar/NavigationSticky";
import Modal from "./components/Modal/Moda";
import About from "./components/About/About";
import Info from "./components/Info/Info";

function App() {
  const COLORS = ["#13FFAA", "#1E676C", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const backgroundImageTwo = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #020617 50%, ${color})`;

  const landingRef = useRef();
  const projectsRef = useRef();
  const infoRef = useRef();
  const aboutRef = useRef();
  const modal = useRef();

  const landingIsInView = useInView(landingRef, {
    margin: "-12% 0px 0px 0px",
    element: 1.0,
  });

  const projectsIsInView = useInView(projectsRef, {
    margin: "-50%",
    once: true,
  });

  const infoIsInView = useInView(infoRef, {
    margin: "-100%",
    once: true,
  });

  const aboutIsInView = useInView(aboutRef, {
    margin: "-100%",
    once: true,
  });

  function showModal() {
    modal.current.showModal();
  }

  function closeModal() {
    modal.current.close();
  }

  return (
    <>
      {landingIsInView ? (
        <Navigation color={color} showModal={showModal} />
      ) : (
        <NavigationSticky color={color} />
      )}
      <LandingPage
        ref={landingRef}
        COLORS={COLORS}
        color={color}
        backgroundImage={backgroundImage}
      />
      <ProjectsPage
        ref={projectsRef}
        COLORS={COLORS}
        color={color}
        backgroundImage={backgroundImageTwo}
        projectsIsInView={projectsIsInView}
      />
      <About ref={aboutRef} aboutIsInView={aboutIsInView} />

      <Info ref={infoRef} infoIsInView={infoIsInView} />
      <Modal ref={modal} closeModal={closeModal} />
    </>
  );
}

export default App;
