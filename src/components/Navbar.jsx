import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.prevent.default();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      // encodeURIComponent makes the query URL-safe
      setQuery("");
    }
  };

  return (
    <header>
      <div className="flex items-center gap-4">
        {/* Logo */}
        <NavLink to="/" end>
          Home
        </NavLink>
        {/* Search Bar */}
        <form className="flex-1" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a product"
              value={query}
              className=""
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        {/* Icon Buttons  */}
        <div className="flex items-center gap-1">
          <NavLink to="wishlist" className="relative">
            <HeartIcon className="w-5 h-5" />
          </NavLink>
          <NavLink to="cart" className="relative">
            <CartIcon className="w-5 h-5" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

function Badge({ count, color }) {
  return (
    <span
      className={`absolute top-0.5 right-0.5 ${color} text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white`}
    >
      {count > 9 ? "9+" : count}
    </span>
  );
}

function SearchIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function CartIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
