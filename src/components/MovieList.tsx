// Componente para mostrar una lista de películas.
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchMovies, setSearchMovies] = useState<string>("");

  const TOKEN: string =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWJlNDk2N2UyNGM1MGQxMzQ3YmVhMWE5YzFhZjQwOCIsInN1YiI6IjY2Mjg5Mjk5YjlhMGJkMDE3YWQ5Nzk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y_jV4YqBUfztY6IvXqyWD8XWQrzBmAOl37bLq3Esnmo";

  //Llamada de API
  const getTrendingMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "aplication/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
        options
      );
      setMovies(response.data.results);
      // console.log("🚀 ~ getData ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error);
    }
  };

  //Carga las peliculas
  useEffect(() => {
    getTrendingMovies();
  }, [TOKEN]);

  //Funcion de busqueda
  const handleSearch = async () => {
    if (!searchMovies) {
      getTrendingMovies();
      return;
    }

    const options = {
      method: "GET",
      headers: {
        accept: "aplication/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchMovies
        )}&language=en-US`,
        options
      );
      setMovies(response.data.results);
      // console.log("🚀 ~ getData ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error);
    }
  };

  //Carga las peliculas si el buscador esta vacio
  useEffect(() => {
    if (!searchMovies) {
      getTrendingMovies();
    }
  }, [searchMovies]);

  return (
    <>
      <h3 className="text-xl mt-4 font-bold tracking-tight text-[--redPrimary] text-center sm:text-xl">
        Todas las Películas
      </h3>
      <div className="justify-center text-base pt-6 w-full font-semibold leading-7 text-[--redPrimary] md:flex lg:gap-x-10">
        <Input
          type="text"
          placeholder="buscar pelicula"
          value={searchMovies}
          onChange={(e) => setSearchMovies(e.target.value)}
        />
        <Button type="submit" onClick={handleSearch}>
          Buscar
        </Button>
      </div>
      <div className="mx-auto mt-4 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {movies.map((movie) => (
          <article
            key={movie.id}
            className="flex flex-col items-start justify-between"
          >
            <div className="group relative">
              <h3 className="mt-3 text-md font-semibold leading-6 text-[--redPrimary] group-hover:text-gray-800">
                {movie.title}
              </h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mt-4 w-full h-auto rounded"
              />
              <p className="mt-2 text-sm text-gray-600">
                Rating: {movie.vote_average}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
