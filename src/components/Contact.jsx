export const Contact = () => {
  return (
    <section className="pt-20 pb-10 bg-gray-300" id="contacto">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-3xl mb-3 text-gray-900">CONTACTO</h1>
          <p className="pt-2 pb-4">
            Queremos ayudarte Puedes contactar con nosotros:
          </p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <a
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.084030839237!2d-68.8572051252458!3d-32.89594646932799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0908932f2d05%3A0x423ac452cae3aa4c!2sSobremonte%20317%2C%20M5500%20Mendoza!5e0!3m2!1ses!2sar!4v1687022488707!5m2!1ses!2sar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 no-underline cursor-pointer font-semibold"
              >
                Sobremonte, 317 Mendoza
              </a>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>261 – 4769077</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>info@cesasin.com.ar</span>
            </p>
          </div>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <span className="mb-2">Nombre y apellido:</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="px-3 py-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-2">Email:</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="px-3 py-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-2">Mensaje:</span>
            <textarea
              rows="3"
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            ></textarea>
          </label>
          <button
            type="button"
            className="self-center font-semibold px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
