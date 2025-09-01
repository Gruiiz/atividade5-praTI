
import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4 w-full max-w-lg mx-auto">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Digite o nome do filme..."
        className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-r-md bg-primary text-white font-semibold hover:bg-indigo-600 transition"
      >
        Buscar
      </button>
    </form>
  );
}
