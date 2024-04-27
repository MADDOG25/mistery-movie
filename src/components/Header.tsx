//Componente para la barra de navegación superior.

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-700">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-0.5 p-0.5">
            <span className="sr-only">Mistery Movie</span>
            <img
              className="h-12 w-auto"
              src="https://i.postimg.cc/s2KfpxTp/Mistery-Movie-removebg-preview.png"
              alt="Mistery Movie-logo"
            />
          </a>
        </div>
        {/* PC - MOBILE CLOSED */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-m font-light leading-6 text-white">
            Inicio
          </a>
          <a href="#" className="text-m font-light leading-6 text-white">
            Peliculas
          </a>
          <a href="#" className="text-m font-light leading-6 text-white">
            Contacto
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-m font-light leading-6 text-white">
            Inicia sesion <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      {/* MOBILE OPEN */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mistery Movie</span>
              <img
                className="h-10 w-auto"
                src="https://i.postimg.cc/s2KfpxTp/Mistery-Movie-removebg-preview.png"
                alt="Mistery Movie-logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
            <Bars3Icon className="size-8" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-white hover:bg-red-500"
                >
                  Inicio
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-white hover:bg-red-500"
                >
                  Pelicula
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-white hover:bg-red-500"
                >
                  Contacto
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-light leading-7 text-white hover:bg-red-500"
                >
                  Inicia sesion
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
