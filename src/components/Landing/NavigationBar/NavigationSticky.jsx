import NavigationItem from "../NavigationItem";
import { motion } from "framer-motion";

export default function NavigationSticky({ color }) {
  return (
    <motion.header
      className="header_intersected"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <ul className="navigation_ul">
          <NavigationItem bgColor={color}>Home</NavigationItem>
          <NavigationItem bgColor={color}>Projects</NavigationItem>
          <NavigationItem bgColor={color}>About</NavigationItem>
          <NavigationItem bgColor={color}>Contact</NavigationItem>
        </ul>
      </nav>
    </motion.header>
  );
}
