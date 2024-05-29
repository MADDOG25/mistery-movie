//Componente para la barra de navegación superior.

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-0.5 p-0.5 text-[--redPrimary] text-2xl flex items-center"
          >
            <span className="sr-only">Mistery Movie</span>
            <img
              className="h-10 w-auto mx-2"
              src="./Mistery-Movie-logo.svg"
              alt="Mistery Movie-logo"
            />
            Mistery Movie
          </a>
        </div>
        {/* PC - MOBILE CLOSED */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[--redPrimary]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="size-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            className="text-m font-light leading-6 text-[--redPrimary]"
          >
            Inicio
          </a>
          <Link
            to="/movie"
            className="text-m font-light leading-6 text-[--redPrimary]"
          >
            Películas
          </Link>
          {/* <a
            href="#"
            className="text-m font-light leading-6 text-[--redPrimary]"
          >
            Contacto
          </a> */}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="text-m font-light leading-6 text-[--redPrimary]"
          >
            Inicia sesión <span aria-hidden="true"></span>
          </Link>
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
            <a
              href="#"
              className="-m-1.5 p-1.5  text-[--redPrimary] text-2xl flex items-center"
            >
              <span className="sr-only">Mistery Movie</span>
              <img
                className="h-8 w-auto mx-2"
                src="./Mistery-Movie-logo.svg"
                alt="Mistery Movie-logo"
              />
              Mistery Movie
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
            <div className="-my-6 divide-y divide-[--redPrimary] ">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-white hover:bg-[--redPrimary] "
                >
                  Inicio
                </a>
                <Link
                  to="/movie"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-white hover:bg-[--redPrimary] "
                >
                  Películas
                </Link>
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-white hover:bg-[--redPrimary] "
                >
                  Contacto
                </a> */}
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-light leading-7 text-white hover:bg-[--redPrimary] "
                >
                  Inicia sesión
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
