
import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, onToggleFavorite, isFavorite }) {
  return (
    <div className="bg-surface dark:bg-gray-800 rounded-xl shadow-md p-4 m-2 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg border border-gray-200 dark:border-gray-700">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-36 h-52 object-cover rounded mb-3 border border-gray-300 dark:border-gray-600 shadow"
      />
      <h3 className="text-lg font-semibold text-primary dark:text-indigo-300 mb-1 text-center">
        {movie.Title} <span className="text-muted text-sm font-normal">({movie.Year})</span>
      </h3>
      <Link
        to={`/details/${movie.imdbID}`}
        className="text-accent hover:underline mb-2"
      >
        Ver detalhes
      </Link>
      <button
        onClick={() => onToggleFavorite(movie)}
        className={`px-3 py-1 rounded transition bg-primary text-white hover:bg-indigo-600 dark:bg-indigo-700 dark:hover:bg-indigo-600 mt-1 ${isFavorite ? 'ring-2 ring-accent' : ''}`}
      >
        {isFavorite ? "Remover Favorito" : "Adicionar Favorito"}
      </button>
    </div>
  );
}
