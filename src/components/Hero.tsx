//Componente para el inicio de la app.

import { InputEmail } from "./ui/inputEmail";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="/bgGradient.svg"
        alt="background gradient mistery movie"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Míranos!
          </h2>
          <h3 className="mt-6 text-3xl leading-8 text-gray-300">
            Películas y series ilimitadas y mucho más
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Disfruta donde quieras. Cancela cuando quieras.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <InputEmail />
          </div>
        </div>
      </div>
    </div>
  );
}
