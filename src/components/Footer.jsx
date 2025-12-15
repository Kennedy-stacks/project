import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-services">
      <div>🚚 Free Shipping</div>
      <div>💵 Money Back</div>
      <div>✉️ 24/7 Support</div>
    </div>
    <p>© {new Date().getFullYear()} E-COM. All rights reserved.</p>
  </footer>
);

export default Footer;
