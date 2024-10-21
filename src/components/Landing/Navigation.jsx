import NavigationItem from "./NavigationItem";
import { motion, useInView } from "framer-motion";

export default function Navigation({ color, showModal }) {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <nav>
        <ul className="navigation_ul">
          <NavigationItem bgColor={color}>About</NavigationItem>
          <NavigationItem bgColor={color}>Projects</NavigationItem>
          <NavigationItem bgColor={color}>Experience</NavigationItem>
          <NavigationItem bgColor={color}>Contact</NavigationItem>
          <button onClick={showModal}>Show Modal</button>
        </ul>
      </nav>
    </motion.header>
  );
}
