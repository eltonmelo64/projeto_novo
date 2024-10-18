import React from "react";
import "./Navbar.css";
import HomeImage from '../../images/Home.png'; // Importação correta

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src={HomeImage} // Usando a imagem importada
            alt="logo"
          />
          
        </div>

        <div className="foralogo">
          <div className="uhuuu">
            <h1>Uhuuuuuuuuuuuuuuuuu!!!</h1>
          </div>
          <div className="listform">
            <ul className="headerlist">
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Contatos</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>

            <div className="boxform">
              <form action="#" className="headerform">
                <input
                  className="inputtext"
                  type="text"
                  placeholder="   Buscar"
                />
                <input
                  className="headerformbutton"
                  type="button"
                  value={"Pesquisar"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
