
import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
      <span className="text-primary font-medium">Carregando...</span>
    </div>
  );
}
