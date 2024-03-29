import React from "react";
import Logo from "../../assets/img/logo.png";
import facebook from "../../icons/facebook.png";
import instagram from "../../icons/instagram.png";
import twitter from "../../icons/twitter.png";
import whatsapp from "../../icons/whatsapp.png";
import "./index.css";
import "./responsive.css";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="footer">
        <div className="icons">
          <span>Contate-nos:</span>
          <br />
          <img src={facebook} alt="logo do facebook" />
          <img src={instagram} alt="logo do instagram" />
          <img src={twitter} alt="logo do twitter" />
          <img src={whatsapp} alt="logo do whatsapp" />
        </div>
        <img className="footer-logo" src={Logo} alt="imagem da logo do site" />
        <section>
          <ul>
            LINKS
            <li>Início</li>
            <li>Lista de Animes</li>
            <li>Calendário</li>
          </ul>
        </section>
        <section>
          <ul>
            LEGAL
            <li>Privacy Notice</li>
            <li>Terms of Use</li>
            <li>Changelog</li>
          </ul>
        </section>
        <section>
          <ul>
            PLUS
            <li>Lendas</li>
            <li>Discord</li>
            <li>Instagram</li>
          </ul>
        </section>
      </div>

      <h3 className="rights-reserved">©2022 - Todos direitos reservados </h3>
    </footer>
  );
};
export default Footer;
