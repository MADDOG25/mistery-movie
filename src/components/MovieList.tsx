// Componente para mostrar una lista de películas.

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

  // const API_KEY: string = "Bearer eabe4967e24c50d1347bea1a9c1af408";
  const TOKEN: string =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWJlNDk2N2UyNGM1MGQxMzQ3YmVhMWE5YzFhZjQwOCIsInN1YiI6IjY2Mjg5Mjk5YjlhMGJkMDE3YWQ5Nzk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y_jV4YqBUfztY6IvXqyWD8XWQrzBmAOl37bLq3Esnmo";

  useEffect(() => {
    const getData = async () => {
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
        console.log("🚀 ~ getData ~ response:", response);
      } catch (error) {
        console.log("🚀 ~ getData ~ error:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-600 pt-6 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {movies.map((movie) => (
        <article key={movie.id} className="flex flex-col items-start justify-between">
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
  );
}
