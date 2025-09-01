import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div className="text-red-500 font-medium text-sm bg-red-50 px-4 py-2 rounded-md border border-red-200 mt-2">
      <span className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4" // Reduzi o tamanho de 5 para 4
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {message}
      </span>
    </div>
  );
}
