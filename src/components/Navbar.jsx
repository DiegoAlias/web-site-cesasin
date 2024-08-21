import myLogo from "/public/img/logo-cesasin1.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="pt-10 pb-3" data-aos="fade-down" data-aos-duration="2500">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#inicio">
              <img src={myLogo} alt="Logo" className="h-10 w-32 mr-3" />
            </a>
          </div>

          {/* Menú */}
          <div className="flex space-x-4 text-gray-700 text-base font-bold">
            <a href="#nosotros" className="hover:text-blue-600 duration-300">
              Nosotros
            </a>
            <a
              href="#especialidades"
              className="hover:text-blue-600 duration-300"
            >
              Especialidades
            </a>
            <a href="#formacion" className="hover:text-blue-600 duration-300">
              Formación Profesional
            </a>
            <a href="#servicios" className="hover:text-blue-600 duration-300">
              Obra sociales y prepagas
            </a>

            <a href="#fundacion" className="hover:text-violet-600 duration-300">
              Fundación
            </a>
            <a href="#contacto" className="hover:text-blue-600 duration-300">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
