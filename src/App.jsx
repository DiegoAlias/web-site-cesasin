import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Preloader } from "./components/Preloader";
import { Hero } from "./components/Hero";
import { Specialties } from "./components/Specialties";
import { ObrasSocial } from "./components/ObrasSocial";
import { Footer } from "./components/Footer";
import { VocationalTraining } from "./components/VocationalTraining";
import { Contact } from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500); // Esperar la animación de desvanecimiento
    }, 2500);

    return () => clearTimeout(timer);
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
          <Navbar />
          <Hero />
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
