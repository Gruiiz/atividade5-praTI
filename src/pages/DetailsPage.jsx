import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { getMovieDetails } from "../services/api";
import useFavorites from "../hooks/useFavorites";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    getMovieDetails(id)
      .then((data) => {
        if (data.Response === "True") setMovie(data);
        else setError(data.Error);
      })
      .catch(() => setError("Erro ao carregar detalhes."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
  <div className="max-w-2xl mx-auto px-4 py-8 bg-background dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-48 h-72 object-cover rounded shadow border border-gray-300 dark:border-gray-600 mb-4 md:mb-0"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-primary mb-2">{movie.Title} <span className="text-muted text-lg font-normal">({movie.Year})</span></h2>
          <p className="mb-1"><span className="font-semibold text-accent">Diretor:</span> {movie.Director}</p>
          <p className="mb-1"><span className="font-semibold text-accent">Elenco:</span> {movie.Actors}</p>
          <p className="mb-1"><span className="font-semibold text-accent">Sinopse:</span> {movie.Plot}</p>
          <p className="mb-4"><span className="font-semibold text-accent">Avaliação:</span> {movie.imdbRating}</p>
          <button
            onClick={() => toggleFavorite(movie)}
            className={`flex items-center gap-2 px-4 py-2 rounded font-semibold transition focus:outline-none shadow-sm
              ${favorites.some(f => f.imdbID === movie.imdbID)
                ? 'bg-rose-500 text-white hover:bg-rose-600 ring-2 ring-rose-400 scale-105'
                : 'bg-primary text-white hover:bg-indigo-600'}
            `}
            aria-pressed={favorites.some(f => f.imdbID === movie.imdbID)}
            style={{ backgroundColor: favorites.some(f => f.imdbID === movie.imdbID) ? '#ef4444' : '#6366f1', color: '#fff', border: 'none' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={favorites.some(f => f.imdbID === movie.imdbID) ? '#fff' : 'none'}
              viewBox="0 0 24 24"
              stroke="#fff"
              className={`w-5 h-5 transition-all duration-200 ${favorites.some(f => f.imdbID === movie.imdbID) ? 'scale-110' : ''}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
            {favorites.some(f => f.imdbID === movie.imdbID) ? "Remover Favorito" : "Adicionar Favorito"}
          </button>
        </div>
      </div>
    </div>
  );
}
