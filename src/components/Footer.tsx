// Componente footer para las paginas de la app.

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-lg font-semibold mb-4 lg:mb-0">© 2024 Mistery Movie</div>
        <ul className="flex flex-wrap justify-center lg:justify-end space-x-4">
          <li>
            <a href="#" className="hover:text-[--redPrimary]">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[--redPrimary]">
              Películas
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[--redPrimary]">
              Acerca de
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[--redPrimary]">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
