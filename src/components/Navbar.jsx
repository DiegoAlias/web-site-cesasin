import { Parallax } from "react-parallax";
import myLogo from "/public/img/logo-cesasin1.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Parallax
        blur={0}
        // bgImage={backgroundImg}
        bgImageAlt="background"
        strength={350}
        className="min-h-screen"
      >
        <nav
          className="shadow-md mt-10 pb-2"
          data-aos="fade-down"
          data-aos-duration="2500"
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#inicio">
                <img src={myLogo} alt="Logo" className="h-10 w-32 mr-3" />
              </a>
            </div>

            {/* Menú */}
            <div className="flex space-x-8 text-gray-700 text-lg font-bold">
              <a href="#tratamientos" className="hover:text-gray-500 ">
                Tratamientos
              </a>
              <a href="#servicios" className="hover:text-blue-600">
                Servicios
              </a>
              <a href="#formacion" className="hover:text-blue-600">
                Formación Profesional
              </a>
              <a href="#nosotros" className="hover:text-blue-600">
                Nosotros
              </a>
              <a href="#contacto" className="hover:text-blue-600">
                Contacto
              </a>
            </div>
          </div>
        </nav>
      </Parallax>
    </div>
  );
};
