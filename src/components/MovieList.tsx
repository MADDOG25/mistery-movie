// Componente para mostrar una lista de películas.

import { useEffect } from "react";
import axios from "axios";

export default function MovieList() {
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
        console.log("🚀 ~ getData ~ response:", response);
      } catch (error) {
        console.log("🚀 ~ getData ~ error:", error);
      }
    };
    getData();
  }, []);

  return (
    // <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-600 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    //   {posts.map((post) => (
    //     <article
    //       key={post.id}
    //       className="flex max-w-xl flex-col items-start justify-between"
    //     >
    //       <div className="flex items-center gap-x-4 text-xs">
    //         <time dateTime={post.datetime} className="text-gray-500">
    //           {post.date}
    //         </time>
    //         <a
    //           href={post.category.href}
    //           className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-[--redPrimary] hover:text-gray-100 "
    //         >
    //           {post.category.title}
    //         </a>
    //       </div>
    //       <div className="group relative">
    //         <h3 className="mt-3 text-lg font-semibold leading-6 text-[--redPrimary] group-hover:text-gray-800">
    //           <a href={post.href}>
    //             <span className="absolute inset-0" />
    //             {post.title}
    //           </a>
    //         </h3>
    //         <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
    //           {post.description}
    //         </p>
    //       </div>
    //       <div className="relative mt-8 flex items-center gap-x-4">
    //         <img
    //           src={post.author.imageUrl}
    //           alt=""
    //           className="h-10 w-10 rounded-full bg-gray-50"
    //         />
    //         <div className="text-sm leading-6">
    //           <p className="font-semibold text-gray-900">
    //             <a href={post.author.href}>
    //               <span className="absolute inset-0" />
    //               {post.author.name}
    //             </a>
    //           </p>
    //           <p className="text-[--redPrimary]">{post.author.role}</p>
    //         </div>
    //       </div>
    //     </article>
    //   ))}
    // </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-600 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <h3 className="text-xl font-bold tracking-tight text-[--redPrimary] sm:text-xl">
        Peliculas nuevas
      </h3>
    </div>
  );
}
