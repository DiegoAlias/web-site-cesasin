import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { motion, useAnimation } from "framer-motion";
import { Parallax } from "react-parallax";
import { useEffect, useRef } from "react";
import myImage from "/public/img/logo-cesasin1.png";
import backgroundImg from "/public/img/fondo1.jpg";
import Cursor from "./Cursor";

const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const HomePage = () => {
  const ref = useRef(null);
  const controls = useAnimation();

  // Configuración de Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const title =
    "CENTRO DE ESTUDIOS, ASISTENCIA E INVESTIGACIÓN EN NEUROCIENCIAS";

  return (
    <div className="min-h-screen">
      <Cursor />
      <Parallax
        blur={0}
        bgImage={backgroundImg}
        bgImageAlt="background"
        strength={350}
        className="min-h-screen"
      >
        <div className="flex flex-col justify-center items-center min-h-screen home-page">
          <img
            className="mb-12 w-[600px] h-auto img-home"
            src={myImage}
            alt="clínica-cesasin"
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
          <div className="container-hero">
            <motion.h1
              className="text-4xl text-center text-blue-900 font-bold"
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              ref={ref}
            >
              {title.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
