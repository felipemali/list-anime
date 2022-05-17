import React from "react";

import Logo from "../../assets/img/logo.png";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={Logo} alt="" />

      <div>
        <ul>
          LINKS
          <li>Início</li>
          <li>Lista de Animes</li>
          <li>Calendário</li>
        </ul>
      </div>
      <div>
        <ul>
          LEGAL
          <li>Privacy Notice</li>
          <li>Terms of Use</li>
          <li>Changelog</li>
        </ul>
      </div>
      <div>
        <ul>
          PLUS
          <li>Lendas</li>
          <li>Discord</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
