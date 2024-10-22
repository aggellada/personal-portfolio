import { forwardRef } from "react";
import AlejandroPic from "../../AlejandroGelladaPicture.jpg";
import { motion } from "framer-motion";

const About = forwardRef(function About({ aboutIsInView }, ref) {
  return (
    <div ref={ref} className="about_page" id="About">
      {aboutIsInView && (
        <>
          <motion.h1
            style={{ color: "white" }}
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: "0px", opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            About
          </motion.h1>
          <div className="about_content_container">
            <motion.div
              className="left_about"
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="skills_item_group">
                <div className="skills_item">
                  <img
                    className="skills_img"
                    src="https://benscott.dev/imgs/html.6aa56206be02cf6404844871df1d2da6.png"
                  />
                  <p>HTML</p>
                </div>
                <div className="skills_item">
                  <img
                    className="skills_img"
                    src="https://benscott.dev/imgs/css.0ce0f0a2b4c4aa34b64c40e5278af3d1.png"
                  />
                  <p>CSS</p>
                </div>
                <div className="skills_item">
                  <img
                    className="skills_img"
                    src="https://benscott.dev/imgs/js.f8a28e905c78dadb79434b7ceebd52a0.png"
                  />
                  <p>JAVASCRIPT</p>
                </div>
              </div>
              <div className="skills_item_group">
                <div className="skills_item">
                  <img
                    className="skills_img"
                    src="https://benscott.dev/imgs/react.cb15bfce2a9004ce61c5f79f805b067b.png"
                  />
                  <p>REACT</p>
                </div>
                <div className="skills_item">
                  <img
                    className="skills_img"
                    src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png"
                  />
                  <p>MOTION</p>
                </div>
                <div className="skills_item">
                  <img
                    className="skills_img"
                    src="https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png"
                  />
                  <p>REDUX</p>
                </div>
                <div className="skills_item">
                  <img
                    className="skills_img"
                    src="https://clipart-library.com/images_k/python-logo-transparent/python-logo-transparent-2.jpg"
                  />
                  <p>PYTHON</p>
                </div>
              </div>
              {/* <p>Languages: HTML, CSS, JavaScript</p>
              <p>Frameworks: ReactJS, NodeJs, MongoDB, ExpressJS</p>
              <p>Technologies: Redux, GitHub, FramerMotion</p> */}
            </motion.div>
            {/* <motion.div
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
            </motion.div> */}
            <motion.div
              className="right_about"
              initial={{ y: "-200px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="right_about_text">
                <p>
                  Dedicated to the philosophy of life-long learning, I’m a
                  front-end developer with a deep passion for JavaScript, React,
                  and all things about web development. The unique blend of
                  creativity, design, and technology fuels my excitement for
                  crafting engaging web experiences. I thrive on the endless
                  opportunities to innovate and explore new trends in front-end
                  development. When I’m not coding, you can find me reading,
                  staying active, or playing guitar.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
});

export default About;
