import { useRef } from "react";
import "./services.scss";
import { motion ,useInView } from "framer-motion";

const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,

    },
  },

};

const Services = () => {

  const ref =useRef()
  const isInView = useInView(ref,{margin:"100px"});
  return (
    <motion.div className="services"  variants={variants} initial="initial" 
    //animate="animate"
   // whileInView="animate"

     ref={ref}
     animate={isInView && "animate"}
   >
      <motion.div className="titlecontainer" variants={variants}>
        <div className="title">
          <img
            src="/people.webp"
            alt=""
            style={{ borderRadius: "10px", width: "250px", height: "150px" }}
          />
          <motion.div className="text-content" variants={variants}>
            <h1 style={{ fontSize: "100px" }}>
              <motion.b whileHover={{color:"orange"}}>Unique Ideas</motion.b>
            </h1>
            <motion.h2 style={{ fontSize: "100px", fontWeight: "bold" }}
            whileHover={{color:"orange"}}
            
            >
              For Your Business
            </motion.h2>
          </motion.div>
        </div>

        <motion.div className="button-container" variants={variants}>
          <button className="big-button"  style={{ fontSize: "35px" ,backgroundColor:"orange"}}>WHAT WE DO?</button>
        </motion.div>
        <p className="helping-text"   style={{ fontSize: "30px" }}  >
          I Focus on helping your brand grow and move forward
        </p>
      </motion.div>
      <motion.div className="listcontainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>lorem jklh jkhquuuss lknjkn
          efgrgtrhthty rgtjyjyjujj</p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>lorem jklh jkhquuuss lkn
          gthtjyjyjyj thyjyjyjjyj yjyjyjyjj</p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>lorem jklh jkhquuuss lknjknnjnjn hbw
          frfgrgthh ththhhht  </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>lorem jklh jkhquuuss lknjknnjnjn hbwsbhwhv
          efgr</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

