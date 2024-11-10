// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Claro</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="/">Personas</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Negocios</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Empresas</a></li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="/">Información a Abonados</a></li>
            <li className="nav-item"><a className="nav-link" href="/">Mi Claro</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
