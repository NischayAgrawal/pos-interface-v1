import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand mb-0 h1 mx-auto text-center">
            POS Application
          </Link>
        </div>
      </nav>
    </header>
  );
}
