
import React from "react";
import MovieCard from "../components/MovieCard";
import useFavorites from "../hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  return (
  <div className="max-w-5xl mx-auto px-4 py-8 bg-background dark:bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">Meus Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="text-muted text-center">Você não possui filmes favoritos ainda.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onToggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
