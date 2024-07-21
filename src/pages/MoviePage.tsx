// Página de detalles de la película que muestra información detallada sobre una película específica.

// import Header from "../components/Header";
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";
import NavbarLogo from "@/components/NavbarLogo";
import { Link } from "react-router-dom";

export default function MoviePage() {
  return (
    <>
    <NavbarLogo/>
      <div className="bg-white py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[--redPrimary] sm:text-4xl">
                Movies
              </h2>
              <p className="mt-2 text-lg text-gray-800">
                Conoce nuestro catálogo
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="divider divider-neutral"></div>
          </div>
          <MovieList />
        </div>
        <div className="mx-auto mt-6 text-center flex justify-center">
          <Link
            to="/"
            className="flex text-m font-light text-[--redPrimary]"
          >
            <img src="/home.svg" width={40} height={40}></img>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
