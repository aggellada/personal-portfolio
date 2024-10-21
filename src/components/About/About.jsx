import { forwardRef } from "react";
import AlejandroPic from "../../AlejandroGelladaPicture.jpg";
import { motion } from "framer-motion";

const About = forwardRef(function About({ aboutIsInView }, ref) {
  return (
    <div ref={ref} className="about_page">
      {aboutIsInView && (
        <>
          <motion.h1
            style={{ color: "white" }}
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {`<> About Me </>`}
          </motion.h1>
          <div className="about_content_container">
            <motion.div
              className="left_about"
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p>Tech Stack</p>
              <p>Languages: HTML, CSS, JavaScript</p>
              <p>Frameworks: ReactJS, NodeJs, MongoDB, ExpressJS</p>
              <p>Technologies: Redux, GitHub, FramerMotion</p>
            </motion.div>
            <motion.div
              className="middle_about"
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <img
                src={AlejandroPic}
                style={{ width: "70%", borderRadius: "200px" }}
              />
              <h1>Alejandro Gellada</h1>
              <p>alejandrogellada@gmail.com</p>
              <p>{`(+63) 917 555 5260`}</p>
            </motion.div>
            <motion.div
              className="right_about"
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <p>Tech Stack</p>
              <p>Languages: HTML, CSS, JavaScript</p>
              <p>Frameworks: ReactJS, NodeJs, MongoDB, ExpressJS</p>
              <p>Technologies: Redux, GitHub, FramerMotion</p>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
});

export default About;
