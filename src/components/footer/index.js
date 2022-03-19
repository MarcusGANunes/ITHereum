import React from "react";
import "./footer.modules.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <footer>
      <div className="footer">
        <ul className="social_list">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p className="copy_right">
          ITHereum<span>&copy; 2022</span>
        </p>
      </div>
    </footer>
  );
}
