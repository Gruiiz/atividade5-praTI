import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { searchMovies } from "../services/api";
import useFavorites from "../hooks/useFavorites";

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!term) return;
    setLoading(true);
    setError("");
    searchMovies(term, currentPage)
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalPages(Math.ceil(data.totalResults / 10));
        } else {
          setError(data.Error);
          setMovies([]);
        }
      })
      .catch(() => setError("Erro ao buscar filmes."))
      .finally(() => setLoading(false));
  }, [term, currentPage]);

  return (
  <div className="max-w-5xl mx-auto px-4 py-8 bg-gr dark:bg-gray-900 min-h-screen">
      <SearchBar onSearch={(newTerm) => { setTerm(newTerm); setCurrentPage(1); }} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.some(f => f.imdbID === movie.imdbID)}
          />
        ))}
      </div>
      {movies.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
