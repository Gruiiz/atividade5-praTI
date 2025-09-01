import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-gray-100 dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 mb-8 sticky top-0 z-20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-3">
        <h1 className="text-2xl font-extrabold tracking-tight flex items-center gap-2 select-none">
          <span className="text-primary text-3xl">🎬</span>
          <span className="text-gray-900 dark:text-white">Movie <span className="text-primary">Finder</span></span>
        </h1>
        <nav className="flex gap-2 mt-2 sm:mt-0">
          <Link
            to="/"
            className="px-3 py-1 rounded-md font-medium text-gray-700 dark:text-gray-100 hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            Buscar
          </Link>
          <Link
            to="/favorites"
            className="px-3 py-1 rounded-md font-medium text-gray-700 dark:text-gray-100 hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            Favoritos
          </Link>
        </nav>
      </div>
    </header>
  );
}
