import { motion } from "framer-motion";
import { forwardRef } from "react";

const Info = forwardRef(function Info({ infoIsInView }, ref) {
  return (
    <>
      <div ref={ref} className="info_page">
        {infoIsInView && (
          <>
            <motion.div
              className="info_content_container"
              initial={{ opacity: 0, y: "-100px" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                className="first_info"
                initial={{ opacity: 0, x: "-100px" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="info_item">
                  <div>
                    <h1>[01]</h1>
                  </div>
                  <div>
                    <h1>Web Design</h1>
                  </div>
                  <div>
                    Creative web design transforms ideas into visually engaging
                    experiences. I focus on user-centric layouts and aesthetics,
                    ensuring every site is not only beautiful but also
                    functional and accessible.
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="second_info"
                initial={{ opacity: 0, x: "-100px" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <div className="info_item">
                  <div>
                    <h1>[02]</h1>
                  </div>
                  <div>
                    <h1>Webflow Development</h1>
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate dolor unde eius modi, pariatur sequi nisi quos
                    exercitationem ipsum necessitatibus totam odit incidunt illo
                    veniam vel quia non. Odit, quia.
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="third_info"
                initial={{ opacity: 0, x: "-100px" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 3 }}
              >
                <div className="info_item">
                  <div>
                    <h1>[03]</h1>
                  </div>
                  <div>
                    <h1>Animation & Interaction</h1>
                  </div>
                  <div>
                    Animation and interaction breathe life into digital
                    experiences. I craft dynamic, engaging animations that
                    enhance usability and storytelling, creating memorable user
                    journeys that captivate and delight.
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
});

export default Info;
