import React from "react";

export default function Header() {
  return (
    <header className="w-full max-w-5xl bg-white shadow-md rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">S</div>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Servicio Nacional de Aprendizaje</h1>
          <p className="text-sm text-gray-500">CGMLTI · Bogotá</p>
        </div>
      </div>

      <nav className="flex gap-6 mt-4 sm:mt-0 text-gray-700 font-medium">
        <a href="#" className="hover:text-green-600">Inicio</a>
        <a href="#" className="hover:text-green-600">Programas</a>
        <a href="#" className="hover:text-green-600">Contacto</a>
      </nav>
    </header>
  );
}
