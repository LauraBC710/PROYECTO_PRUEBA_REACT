import React from "react";

export default function ProgramCard({ title }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center font-medium text-gray-800">
      {title}
    </div>
  );
}
