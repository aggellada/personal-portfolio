import { forwardRef } from "react";
import { useEffect } from "react";
import { motion, animate } from "framer-motion";
import PROJECTS from "../../data/projects";

const ProjectsPage = forwardRef(function ProjectsPage(
  { COLORS, color, backgroundImage, projectsIsInView },
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
    <>
      <motion.div
        ref={ref}
        className="landing_page"
        style={{ backgroundImage, backgroundSize: "cover" }}
        id="projects"
      >
        <div ref={ref} className="projects_page">
          {projectsIsInView && (
            <>
              <motion.h1
                initial={{ y: "-100px", opacity: 0 }}
                animate={{ y: "0px", opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Projects
              </motion.h1>

              <motion.div
                className="projects_container"
                initial={{ x: "-100px", opacity: 0 }}
                animate={{ x: "0px", opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {PROJECTS.map((project) => {
                  return (
                    <div key={project.title} className="project_item">
                      <img src={project.img} style={{ width: "50%" }} />
                      <div className="project_info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project_links">
                          <a href={project.link} target="_blank">
                            <h5 className="links">Visit site</h5>
                          </a>
                          <a href={project.gitlink} target="_blank">
                            <h5 className="links">Github Repo</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
});

export default ProjectsPage;
