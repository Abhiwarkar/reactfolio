import"./portfolio.scss";
import React,{useRef} from 'react';
import{motion,useScroll,useSpring, useTransform} from "framer-motion";
const items=[
{

    id:1,
    title:"React commerce",
    img:"commerce.jpeg",
    desc:"An innovative e-commerce platform providing seamless shopping experiences with advanced features and intuitive design.Revolutionize your online shopping experience with our state-of-the-art React e-commerce website. Explore a vast array of products, enjoy smooth navigation, and benefit from secure transactions, all in one convenient platform.",

},
{

    id:2,
    title:"Next.js blog",
    img:"blog.webp",
    desc:"A cutting-edge blogging platform built with Next.js, offering unparalleled performance and flexibility for content creators.Discover an exceptional blogging experience with our Next.js-powered platform, combining speed, SEO optimization, and effortless content management. Elevate your storytelling with dynamic features, beautiful themes, and seamless design.",
    
},{

    id:3,
    title:"Vanilla JS App",
    img:"app.webp",
    desc:"Experience the simplicity and power of our Vanilla JavaScript app, offering a lightweight and efficient solution for your web development needs. With clean and concise code, unleash the full potential of web technologies while ensuring compatibility across browsers. Our app provides a seamless user experience, robust functionality, and easy maintenance, empowering you to create dynamic and engaging web applications.",
    
},{

    id:4,
    title:"Music App",
    img:"music.jpeg",
    desc:"Dive into a world of rhythm and melody with our immersive Music App. Explore vast libraries of songs, curated playlists, and personalized recommendations tailored to your taste. With seamless streaming and intuitive controls, enjoy your favorite tracks anytime, anywhere. Discover new artists, create your playlists, and let the music move you with our innovative app experience.",
    
}
]
const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
       // offset:["start start","end start"]
        
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300 , 300]);
    return (
        <section >
            <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt=""/>
            </div>
           
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    {/* Add a class to the paragraph */}
                    <p className="description">{item.desc}</p>
                
                    <button>See Demo</button>
                </motion.div>
            </div>
                
                   
            </div>
        </section>
    )




      
}
const Portfolio = () => {
    const ref =useRef();

    const {scrollYProgress}=useScroll({
        target:ref ,
         offset:["end end","start start"]
        });
        const scaleX = useSpring(scrollYProgress,{
            stiffness:100,
            damping:30,

        });
  return (
    <div>
        <div className="progress">
    <h1>Featured Works</h1>
     <motion.div  style={{scaleX}}className="progressBar"></motion.div>

    </div>
    <div className="portfolio-wrapper">
    <div className="portfolio" ref={ref}>
        {items.map(item=>(
          <Single item={item} key={item.id}/> 
        ))} 
      
    </div>
    </div>
    </div>
    
   
  )
}

export default Portfolio;

