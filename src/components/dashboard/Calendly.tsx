"use client";
import { useState, useEffect } from "react";

const Calenderly = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(new URLSearchParams(window.location.search).get("search") || "");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Calenderly</h2>
      <div
        className="calendly-inline-widget w-full sm:w-[500px] h-[650px] border rounded-lg shadow-lg"
        data-url="https://calendly.com/montyits71/new-meeting?text_color=ffffff&primary_color=140202"
      ></div>
    </div>
  );
};

export default Calenderly;
