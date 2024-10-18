import React, { useEffect } from "react";
import "./Carousel.css";

function Carousel() {
  useEffect(() => {
    const radios = document.querySelectorAll('input[name="radio-btn"]');
    let indiceAtual = 0;

    const rotacionarAutomaticamente = () => {
      indiceAtual = (indiceAtual + 1) % radios.length; // Incrementa o índice
      radios[indiceAtual].checked = true; // Seleciona o próximo rádio
    };

    const intervalo = setInterval(rotacionarAutomaticamente, 3000); // Troca a cada 3 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
            <img src="https://cdn.abrahao.com.br/base/0da/582/375/como-montar-um-pub.jpg" alt="bar" />
          </div>
          <div className="slide">
            <img src="https://lets.events/blog/wp-content/uploads/2022/05/boate-noturna-scaled.jpg" alt="boate" />
          </div>
          <div className="slide">
            <img src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg" alt="restaurante" />
          </div>
          <div className="slide">
            <img src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/08/whatsapp-image-2022-08-17-at-194440.jpg" alt="show" />
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </>
  );
}

export default Carousel;
