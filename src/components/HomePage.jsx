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

const floatVariants = {
  animate: {
    x: [-5, 5, -5],
    y: [-5, 7, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const HomePage = () => {
  const ref = useRef(null);
  const controls = useAnimation();

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

  return (
    <div className="min-h-screen">
      <Cursor />
      <Parallax
        blur={0}
        bgImage={backgroundImg}
        bgImageAlt="background"
        strength={350}
        className="min-h-screen bg-cover bg-center"
      >
        <div className="flex flex-col justify-center items-center min-h-screen px-4 md:px-8 lg:px-16">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="mb-8 md:mb-12 lg:mb-16"
          >
            <img
              src={myImage}
              alt="clínica-cesasin"
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="w-[300px] md:w-2/3 lg:w-[600px] h-auto"
            />
          </motion.div>
          <div className="container-hero">
            <motion.h1
              className="text-xl md:text-3xl lg:text-4xl text-center text-blue-900 font-medium mt-3"
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              ref={ref}
            >
              <div className="flex flex-col items-center mx-8 mt-4">
                <span className="block">
                  {`CENTRO DE ESTUDIOS, ASISTENCIA E INVESTIGACIÓN EN`
                    .split("")
                    .map((letter, index) => (
                      <motion.span
                        key={index}
                        className="inline-block"
                        variants={letterVariants}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                </span>
                <span className="block mt-1 md:mt-3 lg:mt-4">
                  {`NEUROCIENCIAS`.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      variants={letterVariants}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </span>
              </div>
            </motion.h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
