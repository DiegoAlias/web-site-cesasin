import { useState, useRef, useEffect } from "react";
import {
  HiMenu,
  HiX,
  HiUserGroup,
  HiAcademicCap,
  HiBriefcase,
  HiOfficeBuilding,
  HiMail,
} from "react-icons/hi";
import PropTypes from "prop-types";

export const Navbar = ({ isVisible }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !overlayRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`navbar-button-container ${isVisible ? "visible" : ""}`}>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 flex items-center space-x-2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 duration-300"
      >
        <span>Menú</span>
        {showMenu ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Navbar */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-80 navbar shadow-lg transition-transform duration-500 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } z-50`} // Asegúrate de que el menú esté encima del overlay
      >
        <div className="m-4 w-auto h-8">
          <img
            src="/img/logo-cesasin1.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>
        <nav className="pt-10 pb-3 px-4">
          {/* Menú */}
          <div className="flex flex-col space-y-4 text-gray-700 text-lg font-bold">
            <a
              href="#nosotros"
              className="flex items-center gap-2 hover:text-blue-600 duration-300 hover:scale-105"
            >
              <HiUserGroup size={20} />
              Nosotros
            </a>
            <a
              href="#especialidades"
              className="flex items-center gap-2 hover:text-blue-600 duration-300 hover:scale-105"
            >
              <HiAcademicCap size={20} />
              Especialidades
            </a>
            <a
              href="#formacion"
              className="flex items-center gap-2 hover:text-blue-600 duration-300 hover:scale-105"
            >
              <HiBriefcase size={20} />
              Formación Profesional
            </a>
            <a
              href="#servicios"
              className=" flex items-center gap-2 hover:text-blue-600 duration-300 hover:scale-105"
            >
              <HiOfficeBuilding size={20} />
              Obra sociales y prepagas
            </a>
            <a
              href="#fundacion"
              className="flex items-center gap-2 text-violet-700 hover:text-violet-800 duration-300 hover:scale-105"
            >
              <HiOfficeBuilding size={20} />
              Fundación
            </a>
            <a
              href="#contacto"
              className="flex items-center gap-2 hover:text-blue-600 duration-300 hover:scale-105"
            >
              <HiMail size={20} />
              Contacto
            </a>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {showMenu && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 pointer-events-auto" // Asegúrate de que el overlay esté debajo del menú
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
};

Navbar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
