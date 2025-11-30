import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

// ✅ MUI ICONS
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="ajmal-style-nav">

        {/* ✅ LEFT MENU */}
        <div className={`nav-left ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" className="nav-link" onClick={() => setMenuOpen(false)}>Shop All</NavLink>
          <NavLink to="/gifts" className="nav-link" onClick={() => setMenuOpen(false)}>Gifting</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</NavLink>
        </div>

        {/* ✅ CENTER LOGO */}
        <div className="nav-center">
          <NavLink to="/" className="nav-logo">
            <img src="/logo.png" alt="Pran Urja" />
          </NavLink>
        </div>

        {/* ✅ RIGHT ICONS */}
        <div className="nav-right">
          <SearchIcon className="mui-icon" />
          <PersonOutlineOutlinedIcon className="mui-icon" />
          <div className="cart-icon-wrapper">
            <ShoppingCartOutlinedIcon className="mui-icon" />
          </div>

          {/* ✅ HAMBURGER ICON (MOBILE) */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>

      </nav>
    </header>
  );
}
