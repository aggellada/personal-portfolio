import { motion } from "framer-motion";

export default function NavigationItem({ children, bgColor }) {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <li>
      <motion.span
        initial="initial"
        whileHover="hovered"
        className="stagger_layout nav_links"
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.a
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
              href="#projects"
            >
              {l}
            </motion.a>
          ))}
        </div>
        <div className="stagger2">
          {children.split("").map((l, i) => (
            <motion.a
              style={{ color: bgColor }}
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
              href={`#${children}`}
            >
              {l}
            </motion.a>
          ))}
        </div>
      </motion.span>
    </li>
  );
}
