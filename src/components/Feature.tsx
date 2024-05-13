export default function Feature() {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
          <div className="max-w-xl space-y-3">
            <h3 className="text-[--redPrimary] text-3xl font-semibold sm:text-4xl">
              ¡Descubre un mundo de emociones con nuestra app de películas!
            </h3>
            <p className="text-base text-gray-300">
              Desde clásicos atemporales hasta los estrenos más recientes, ¡todo
              en la palma de tu mano!
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="/rebel-moon.jpg"
              className="w-full shadow-lg rounded-lg border"
              alt="rebel-moon"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col w-full">
        <div className="divider divider-neutral"></div>
      </div>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
          <div className="max-w-xl space-y-3 md:order-last">
            <h3 className="text-[--redPrimary] text-3xl font-semibold sm:text-4xl">
              ¿Listo para sumergirte en historias inolvidables?
            </h3>
            <p className="text-base text-gray-300">
              Nuestra app de películas te lleva a un viaje cinematográfico sin
              límites. Descubre nuevas favoritas y revive viejos amores del
              cine.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="/rebel-moon.jpg"
              className="w-full shadow-lg rounded-lg border"
              alt="rebel-moon"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col w-full">
        <div className="divider divider-neutral"></div>
      </div>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-16 justify-between md:px-8 lg:flex">
          <div className="max-w-xl space-y-3">
            <h3 className="text-[--redPrimary] text-3xl font-semibold sm:text-4xl">
              ¿Aburrido de buscar películas en múltiples plataformas?
            </h3>
            <p className="text-base text-gray-300">
              Simplifica tu experiencia con nuestra app todo en uno. Desde
              clásicos hasta los últimos estrenos, ¡todo en un solo lugar!
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="/rebel-moon.jpg"
              className="w-full shadow-lg rounded-lg border"
              alt="rebel-moon"
            />
          </div>
        </div>
      </section>
    </>
  );
}
