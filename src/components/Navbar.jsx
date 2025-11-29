import { NavLink } from "react-router-dom";
import "./Navbar.css";

// ✅ MUI ICONS
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="ajmal-style-nav">

        {/* ✅ LEFT MENU */}
        <div className="nav-left">
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/products" className="nav-link">Shop All</NavLink>
          <NavLink to="/gifts" className="nav-link">Gifting</NavLink>
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        </div>

        {/* ✅ CENTER LOGO */}
        <div className="nav-center">
          <NavLink to="/" className="nav-logo">
            <img src="/logo.png" alt="Pran Urja" />
          </NavLink>
        </div>

        {/* ✅ RIGHT ICONS (MUI) */}
        <div className="nav-right">
          <SearchIcon className="mui-icon" />
          <PersonOutlineOutlinedIcon className="mui-icon" />
          <div className="cart-icon-wrapper">
            <ShoppingCartOutlinedIcon className="mui-icon" />
          </div>
        </div>

      </nav>
    </header>
  );
}
