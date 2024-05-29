// Componente para mostrar una lista de películas.
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import axios from "axios";

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[]; //Actualizar con la API
  genre?: Genre[]; //Campo opcional si necesita el nombre del genero
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchMovies, setSearchMovies] = useState<string>("");
  const [genres, setGenres] = useState<Genre[]>([]);

  const TOKEN: string =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWJlNDk2N2UyNGM1MGQxMzQ3YmVhMWE5YzFhZjQwOCIsInN1YiI6IjY2Mjg5Mjk5YjlhMGJkMDE3YWQ5Nzk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y_jV4YqBUfztY6IvXqyWD8XWQrzBmAOl37bLq3Esnmo";

  //Llamada de Generos
  const getGenreMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    };
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?language=en-US",
        options
      );
      setGenres(response.data.genres);
      // console.log("🚀 ~ getGenreMovies ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ getGenreMovies ~ error:", error);
    }
  };

  //Llamada de Peliculas en Tendendia
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
    getGenreMovies();
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

  //Funcion para obtener el nombre del genero
  const getGenreNames = (genreIds: number[]): string[] => {
    return genreIds.map((id) => genres.find((genre) => genre.id === id) ?.name || "")
  }

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
                className="mt-4 w-full rounded"
              />
              <p className="mt-2 text-sm text-gray-600">
                Rating: {movie.vote_average}
              </p>
              {getGenreNames(movie.genre_ids).map((genre, index) => (
                  <span
                    key={index}
                    className="bg-red-100 text-red-800 text-xs font-medium me-1 px-1 py-0.5 rounded-full "
                  >
                    {genre}
                  </span>
                ))}
            </div>
          </article>
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-8">
        <div className="flex flex-col items-center">
          {/* <!-- Help text --> */}
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              20
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              100
            </span>{" "}
            Entries
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
            {/* <!-- Buttons --> */}
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Prev
            </button>
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
