import React from "react";

export default function Footer() {
  return (
    <footer className="w-full max-w-5xl mt-8 text-gray-600 text-sm">
      <div className="bg-white p-4 rounded-xl shadow text-center">
        <p>© {new Date().getFullYear()} SENA · CGMLTI Bogotá</p>
        <p className="mt-2">Correo: lauraunisena25@gmail.com · Tel: (+57) 312 334 9822 </p>
      </div>
    </footer>
  );
}
