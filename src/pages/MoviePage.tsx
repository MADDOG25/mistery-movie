// Página de detalles de la película que muestra información detallada sobre una película específica.

// import Header from "../components/Header";
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";

export default function MoviePage() {
  return (
    <>
    {/* <Header/> */}
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-[--redPrimary] sm:text-4xl">
            Movies
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-800">
            Conoce nuestro catálogo
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="divider divider-neutral"></div>
        </div>
        
        <MovieList />
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
