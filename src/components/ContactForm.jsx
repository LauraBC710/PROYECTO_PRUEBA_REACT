import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado ✅");
    setFormData({ nombres: "", apellidos: "", mensaje: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="nombres"
        value={formData.nombres}
        onChange={handleChange}
        placeholder="Nombres"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
        required
      />
      <input
        name="apellidos"
        value={formData.apellidos}
        onChange={handleChange}
        placeholder="Apellidos"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
        required
      />
      <textarea
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        placeholder="Mensaje"
        rows="4"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
        required
      />
      <button
        type="submit"
        className="mx-auto w-40 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
      >
        Enviar
      </button>
    </form>
  );
}
