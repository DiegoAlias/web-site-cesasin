import { Parallax } from "react-parallax";
import Tilt from "react-parallax-tilt";
import backgroundImg2 from "/public/img/fondo2.jpg";
import backgroundImg3 from "/public/img/fondo3.jpg";
import galeno from "/public/img/galeno.jpeg";
import medife from "/public/img/medife.png";
import ospe from "/public/img/ospe.jpeg";
import prevencionART from "/public/img/prevencionART.jpeg";
import provinciaART from "/public/img/provinciaART.png";

export const ObrasSocial = () => {
  return (
    <div className="min-h-screen home-page" id="servicios">
      <Parallax
        blur={0}
        bgImage={backgroundImg2}
        bgImageAlt="background"
        strength={350}
        className="min-h-screen"
      >
        <div className="container relative pb-8 pl-12 my-10">
          <h1 className="text-3xl text-gray-900 mb-4">
            OBRA SOCIALES Y PREPAGAS
          </h1>

          <div className="flex justify-start items-start">
            {/* Componente Tilt para el efecto de movimiento hacia el puntero */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1200}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
              className="w-1/2 mt-6"
            >
              <img
                src={backgroundImg3}
                alt="Imagen con Tilt Effect"
                className="rounded-lg shadow-lg"
                data-aos="fade-right"
                data-aos-duration="2500"
              />
            </Tilt>

            <div className="ml-8 w-1/2">
              {/* Contenedor Flex para las imágenes */}
              <div className="flex flex-col items-center mt-16">
                <div className="flex justify-center mb-4">
                  <img
                    src={galeno}
                    alt="Galeno"
                    className="w-1/4 h-26 mx-2 rounded-lg shadow-lg"
                    data-aos="fade-down-left"
                    data-aos-duration="2500"
                  />
                  <img
                    src={medife}
                    alt="Medife"
                    className="w-1/4 h-26 mx-2 rounded-lg shadow-lg"
                    data-aos="fade-down-left"
                    data-aos-duration="2500"
                  />
                  <img
                    src={ospe}
                    alt="OSPE"
                    className="w-1/4 h-26 mx-2 rounded-lg shadow-lg"
                    data-aos="fade-down-left"
                    data-aos-duration="2500"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={provinciaART}
                    alt="Provincia ART"
                    className="w-48 h-24 mx-2 rounded-lg shadow-lg"
                    data-aos="fade-down-left"
                    data-aos-duration="3000"
                  />
                  <img
                    src={prevencionART}
                    alt="Prevención ART"
                    className="w-32 h-32 mx-2 rounded-lg shadow-lg"
                    data-aos="fade-down-left"
                    data-aos-duration="3000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};