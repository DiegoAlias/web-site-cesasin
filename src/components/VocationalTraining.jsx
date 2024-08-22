export const VocationalTraining = () => {
  return (
    <section
      className="pt-14 pb-10 dark:bg-gray-100 dark:text-gray-800"
      id="formacion"
    >
      <h1 className="text-2xl sm:text-3xl leading-none sm:ml-12 text-center sm:text-left">
        FORMACIÓN PROFESIONAL
      </h1>
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <p className="max-w-2xl text-center dark:text-gray-900">
          En Cesasin lo importante eres tú, por eso nuestros equipos están
          formados por especialistas de diferentes disciplinas profesionales:
          psicólogos, psiquiatras, médicos, nutricionistas, enfermeros, y
          educadores sociales. Todos ellos trabajan de manera coordinada para
          ayudarte en tu recuperación.
        </p>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center"
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center"
            >
              <img
                alt=""
                className="w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                src={`https://source.unsplash.com/100x100/?portrait?${
                  index + 1
                }`}
              />
              <p className="text-lg sm:text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="dark:text-gray-600">Visual Designer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
