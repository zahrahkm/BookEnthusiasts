import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/?q=${encodeURIComponent(query.trim())}`);
    } else {
      navigate("/");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) {
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto ">
      <div className="relative">
        <input
          type="search"
          className="w-full px-4 py-3 pl-12 text-gray-900 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Search for books..."
          value={query}
          onChange={handleChange}
          aria-label="Search books"
        />
        <MagnifyingGlassIcon
          className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
    </form>
  );
};
