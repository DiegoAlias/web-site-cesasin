import { Parallax } from "react-parallax";
import Tilt from "react-parallax-tilt";
import backgroundImg2 from "/public/img/fondo4.jpg";
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
        <div className="container relative px-4 pb-8 pl-4 sm:pl-12 my-10">
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-4 text-center sm:text-left">
            OBRA SOCIALES Y PREPAGAS
          </h2>

          <div className="flex flex-col sm:flex-row">
            {/* Componente Tilt para el efecto de movimiento hacia el puntero */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1200}
              scale={1.02}
              transitionSpeed={2000}
              gyroscope={true}
              className="w-full sm:w-1/2 mt-6"
            >
              <img
                src={backgroundImg3}
                alt="Imagen con Tilt Effect"
                className="rounded-lg shadow-lg"
                data-aos="fade-right"
                data-aos-duration="2500"
              />
            </Tilt>

            <div className="mt-8 sm:ml-8 items-center px-6 sm:w-1/2">
              {/* Contenedor Flex para alinear las imágenes en una fila */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <img
                  src={galeno}
                  alt="Galeno"
                  className="w-auto h-24 rounded-lg shadow-lg"
                  data-aos="fade-down-left"
                  data-aos-duration="2500"
                />
                <img
                  src={medife}
                  alt="Medife"
                  className="w-auto h-24 rounded-lg shadow-lg"
                  data-aos="fade-down-left"
                  data-aos-duration="2500"
                />
                <img
                  src={ospe}
                  alt="OSPE"
                  className="w-auto h-24 rounded-lg shadow-lg"
                  data-aos="fade-down-left"
                  data-aos-duration="2500"
                />
                <img
                  src={prevencionART}
                  alt="Prevención ART"
                  className="w-auto h-24 rounded-lg shadow-lg"
                  data-aos="fade-down-left"
                  data-aos-duration="3000"
                />
              </div>
              <div className="mt-6">
                <img
                  src={provinciaART}
                  alt="Provincia ART"
                  className="w-auto h-24 rounded-lg shadow-lg sm:flex mx-auto"
                  data-aos="fade-down-left"
                  data-aos-duration="3000"
                />
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
