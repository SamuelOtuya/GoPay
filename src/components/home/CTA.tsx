import React from "react";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
        Ready to Get Covered?
      </h2>
      <p className="text-slate-600 mb-10 max-w-xl mx-auto">
        Secure your future today with tailored insurance solutions. Get a
        personalized quote in just a few clicks.
      </p>

      <button
        onClick={() => navigate("/quote")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-lg shadow-md transition-all transform hover:scale-105"
      >
        Get Your Quote Now
      </button>
    </section>
  );
}

export default CTA;
