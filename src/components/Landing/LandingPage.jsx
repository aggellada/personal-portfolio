import { motion, animate } from "framer-motion";
import StaggerText from "../framers/StaggerText";
import { forwardRef, useEffect } from "react";
import AlejandroPic from "../../AlejandroGelladaPicture.jpg";

const LandingPage = forwardRef(function LandingPage(
  { COLORS, color, backgroundImage },
  ref
) {
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div ref={ref} className="landing_page" style={{ backgroundImage }}>
      <div className="landing_content_container"></div>
      <motion.div
        className="landing_content_one"
        style={{ overflowX: "hidden" }}
        initial={{
          x: -50,
          opacity: 0,
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h1>Hi, I am </h1>
        <div>
          <StaggerText>Alejandro</StaggerText>
        </div>

        <h3>a self-taught Web Developer.</h3>
        <p>
          I craft websites that align with your brand and engage your audience –
          creating meaningful and memorable experiences.
        </p>
      </motion.div>
      <motion.div
        className="landing_content_two"
        initial={{
          x: 50,
          opacity: 0,
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <img
          src={AlejandroPic}
          style={{ width: "70%", borderRadius: "200px" }}
        />
      </motion.div>
    </motion.div>
  );
});

export default LandingPage;
