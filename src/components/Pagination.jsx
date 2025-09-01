
import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 rounded bg-primary text-white font-medium disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-indigo-600 transition"
      >
        Anterior
      </button>
      <span className="text-muted text-base">
        Página <span className="font-bold text-primary">{currentPage}</span> de {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 rounded bg-primary text-white font-medium disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-indigo-600 transition"
      >
        Próxima
      </button>
    </div>
  );
}
