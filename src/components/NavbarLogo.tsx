//Componente para la barra de navegación superior.

export default function NavbarLogo() {
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
            className="-m-0.5 p-0.5 text-white text-2xl flex items-center"
          >
            <span className="sr-only">Mistery Movie</span>
            <img
              className="h-10 w-auto mx-2"
              src="./Mistery-Movie-logo.svg"
              alt="Mistery Movie logo"
            />
            Mistery Movie
          </a>
        </div>
      </nav>
    </header>
  );
}
