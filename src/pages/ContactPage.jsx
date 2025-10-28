import React from "react";
import Header from "../components/Header";
import ProgramCard from "../components/ProgramCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const programas = [
  "ADSO",
  "Redes de Datos",
  "Animación 3D",
  "Logística",
  "Mercadeo",
  "Sistemas",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 font-sans">
      <Header />

      
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 w-full max-w-5xl">
        {programas.map((p) => (
          <ProgramCard key={p} title={p} />
        ))}
      </section>

      
      <section className="mt-10 w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Contacto</h2>
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
