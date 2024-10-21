import { motion } from "framer-motion";

export default function StaggerText({ children }) {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className="stagger_layout alejandro"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.p
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-150%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="stagger1"
            key={i}
          >
            {l}
          </motion.p>
        ))}
      </div>
      <span className="stagger2">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="stagger1"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}
