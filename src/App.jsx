import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import "./App.css";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Preloader } from "./components/Preloader";
import { Hero } from "./components/Hero";
import { Specialties } from "./components/Specialties";
import { ObrasSocial } from "./components/ObrasSocial";
import { Footer } from "./components/Footer";
import { VocationalTraining } from "./components/VocationalTraining";
import { Contact } from "./components/Contact";
import { WhatsappButton } from "./components/WhatsappButton";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showWhatsappButton, setShowWhatsappButton] = useState(false);
  const [showNavbarButton, setShowNavbarButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // Esperar la animación de desvanecimiento
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Puedes ajustar el valor a la distancia de scroll deseada
        setShowWhatsappButton(true);
        setShowNavbarButton(true);
      } else {
        setShowWhatsappButton(false);
        setShowNavbarButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <div
          className={`transition-opacity ${fadeOut ? "fade-out" : "fade-in"}`}
        >
          <Preloader />
        </div>
      ) : (
        <div className="fade-in">
          <HomePage />
          <Navbar isVisible={showNavbarButton} />
          <Hero />
          <WhatsappButton isVisible={showWhatsappButton} />
          <Specialties />
          <VocationalTraining />
          <ObrasSocial />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
