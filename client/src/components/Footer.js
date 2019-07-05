import React from "react";
import logo from "../assets/images/logo.png";
import visa from "../assets/images/visa.svg";
import mastercard from "../assets/images/mastercard.svg";
import amex from "../assets/images/amex.svg";
import paypal from "../assets/images/paypal.svg";
import dinersclub from "../assets/images/diners_club.svg";
import discover from "../assets/images/discover.svg";

function Footer() {
  return (
    <footer>
      <p className="footer__logo">
        <img src={logo} alt="logo" width="150px" />
      </p>
      <div className="footer__grid">
        <div className="footer__links">
          <ul>
            <li>©BROADCAST CLEAN 2019</li>
            <li>SEARCH</li>
            <li>INVISIBLE THEMES</li>
          </ul>
        </div>
        <div className="footer__payment">
          <ul>
            <li>
              <img src={visa} alt="visa" />
            </li>
            <li>
              <img src={mastercard} alt="mastercard" />
            </li>
            <li>
              <img src={amex} alt="amex" />
            </li>
            <li>
              <img src={paypal} alt="paypal" />
            </li>
            <li>
              <img src={dinersclub} alt="Diners Club" />
            </li>
            <li>
              <img src={discover} alt="Discover" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
