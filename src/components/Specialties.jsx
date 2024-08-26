import { Parallax } from "react-parallax";
import backgroundImg2 from "/public/img/fondo4.jpg";

export const Specialties = () => {
  return (
    <div id="especialidades">
      <Parallax
        blur={0}
        bgImage={backgroundImg2}
        bgImageAlt="background"
        strength={350}
        className="py-2"
      >
        <div className="container relative pb-8 pl-4 md:pl-12 my-10">
          <h2 className="text-center text-2xl md:text-3xl text-gray-900 mb-4 md:text-start">
            ESPECIALIDADES
          </h2>
          <div className="flex flex-col font-medium justify-center items-center md:flex-row md:justify-start">
            <ul
              className="list-none w-full pr-3 md:w-1/2 space-y-4"
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <div>
                <div
                  className="space-y-2 bg-teal-600 rounded-r-2xl py-2 px-4 text-white"
                  data-aos="fade-left"
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
                </div>
                <div
                  className="space-y-2 mt-4 bg-violet-700 rounded-r-2xl py-2 px-4 text-white"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <li>Trastornos del Neurodesarrollo</li>
                  <li>Reeducaciones Psicopedagógicas</li>
                  <li>Unidad de Psiquiatría General - UPG</li>
                </div>
                <div
                  className="space-y-2 mt-4 bg-teal-600 rounded-r-2xl py-2 px-4 text-white"
                  data-aos="fade-up-left"
                  data-aos-duration="3000"
                >
                  <li>Ansiedad</li>
                  <li>Adicciones y Patología Dual</li>
                  <li>Adicciones Tecnológicas</li>
                  <li>Unidad de Terapia Familiar</li>
                  <li>Unidad de Salud Mental del Adolescente (USMA)</li>
                </div>
              </div>
            </ul>
            <div
              className="flex w-full md:w-1/2 justify-center items-center relative mt-4 md:mt-0"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <button className="text-white italic text-lg md:text-2xl font-semibold border-4 border-violet-700 bg-violet-700 px-4 py-2 md:py-1 rounded-md hover:bg-violet-700 hover:scale-110 duration-300">
                Más información
              </button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
