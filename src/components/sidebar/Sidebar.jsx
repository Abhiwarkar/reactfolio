import  { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();

  const handleToggle = () => {
    setOpen((prev) => !prev);
    controls.start(open ? "closed" : "open");
  };

  useEffect(() => {
    // Close sidebar when component mounts
    setOpen(false);
    controls.start("closed");
  }, []); // Run only once when component mounts

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open":"closed"} >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen ={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

