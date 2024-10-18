import React from "react";
import "./Sidenavbar.css";

function Sidenavbar() {
  return (
    <>
      <div className="container">
        <div className="caixa">
          <h1>Vamos encontrar o seu rolê?</h1>
          <ul className="listaSidebar">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Busca completa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Perto de você
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Por categorias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nível de agito
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidenavbar;
