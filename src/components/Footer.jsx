import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ✅ BRAND INFO */}
        <div className="footer-brand">
          <h2>Pran Urja</h2>
          <p>
            Premium perfumes, fragrance oils & luxury gift sets crafted
            with love and elegance.
          </p>
        </div>

        {/* ✅ QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/gifts">Gifts</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* ✅ CONTACT INFO */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Pune, India</p>

          <p>
            📞 <a href="tel:+919834078335">+91 98340-78335</a>
          </p>
          <p>
            📞 <a href="tel:+919657602575">+91 96576-02575</a>
          </p>
          <p>
            ✉️ <a href="mailto:pranurja02@gmail.com">pranurja02@gmail.com</a>
          </p>
        </div>

      </div>

      {/* ✅ COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Pran Urja. All rights reserved.</p>
      </div>
    </footer>
  );
}
