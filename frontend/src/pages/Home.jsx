import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand mb-0 h1 mx-auto text-center">
              POS Application
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div className="text-center">
            <h1 className="mb-4">
              Click the button to browse the services we provide
            </h1>
            <Link to="/pos" className="btn btn-primary">
              Browse Services
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
