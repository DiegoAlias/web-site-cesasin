import { useEffect, useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { HomePage } from "./components/HomePage";
import { Preloader } from "./components/Preloader";

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
          <Hero />
        </div>
      )}
    </>
  );
}

export default App;
