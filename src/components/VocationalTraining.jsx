export const VocationalTraining = () => {
  return (
    <section
      className="pt-14 pb-10 dark:bg-gray-100 dark:text-gray-800"
      id="formacion"
    >
      <h1 className="text-3xl leading-none sm:text-3xl sm:ml-12">
        FORMACION PROFESIONAL
      </h1>
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <p className="max-w-2xl text-center dark:text-gray-900">
          En Cesasin lo importante eres tu, por eso nuestros equipos están
          formados por especialistas de diferentes disciplinas profesionales:
          psicólogos, psiquiatras, médicos, nutricionistas, enfermeros, y
          educadores sociales. Todos ellos trabajan de manera coordinada para
          ayudarte en tu recuperación.
        </p>
        <div
          className="flex flex-row flex-wrap-reverse justify-center"
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?1"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?2"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?3"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?4"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Visual Designer</p>
          </div>
          <div className="flex flex-col justify-center m-8 text-center">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://source.unsplash.com/100x100/?portrait?5"
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Visual Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};
