import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <h1 className="text-center">Catálogo de Filmes</h1>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Início
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/create' className="nav-link">
            Criar
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/update' className="nav-link" >
            Alterar
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/delete"className="nav-link">
            Apagar
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
