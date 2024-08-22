import { Parallax } from "react-parallax";
import backgroundImg2 from "/public/img/fondo2.jpg";

export const Specialties = () => {
  return (
    <div className="min-h-screen home-page" id="especialidades">
      <Parallax
        blur={0}
        bgImage={backgroundImg2}
        bgImageAlt="background"
        strength={350}
        className="min-h-screen"
      >
        <div className="container relative pb-8 pl-4 md:pl-12 my-10">
          <h1 className="text-center text-2xl md:text-3xl text-gray-900 mb-4 md:text-start">
            ESPECIALIDADES
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <ul
              className="list-disc pl-6 md:pl-12 py-6 bg-teal-700 text-white font-medium rounded-lg mb-4 w-full md:w-1/2 relative bg-ul-specialties"
              data-aos="fade-right"
              data-aos-duration="2500"
            >
              <div
                className="space-y-2"
                data-aos="fade-down-right"
                data-aos-duration="3000"
              >
                <li>Trastornos de Conducta Alimentaria (TCA)</li>
                <li>
                  Abordajes de los diferentes trastornos que afectan al
                  psiquismo
                </li>
                <li>Trastornos de Conducta - TC</li>
                <li>Trastornos de Personalidad (TP)</li>
                <li>Trastorno Límite de la Personalidad - TLP</li>
                <li>Trastornos del Neurodesarrollo</li>
                <li>Reeducaciones Psicopedagógicas</li>
                <li>Unidad de Psiquiatría General - UPG</li>
                <li>Ansiedad</li>
                <li>Adicciones y Patología Dual</li>
                <li>Adicciones Tecnológicas</li>
                <li>Unidad de Terapia Familiar</li>
                <li>Unidad de Salud Mental del Adolescente (USMA)</li>
              </div>
            </ul>
            <div
              className="flex w-full md:w-1/2 justify-center items-center relative mt-4 md:mt-0"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <button className="text-white italic text-lg md:text-xl font-semibold border-4 border-violet-700 bg-violet-700 px-4 py-2 md:py-1 rounded-md hover:bg-violet-700 hover:scale-110 duration-300">
                Más información
              </button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
