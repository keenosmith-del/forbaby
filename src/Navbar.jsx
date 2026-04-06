import { Link } from "react-router-dom";
import { Bell, Search, ShoppingCart } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ setIsLoggedIn, cartCount }) {
    const location = useLocation();

    const navigate = useNavigate();

    const handleLogoClick = () => {
    if (location.pathname === "/products") {
        // already on products → scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        // go to products
        navigate("/products");
    }
    };

    // Scroll-based hide/show logic sticky navbar
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Add a state to track if the user has scrolled past a certain point
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }

        // 👇 ADD THIS
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        setLastScrollY(window.scrollY);
        };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  return (
    <div className={`nav-row ${showNav ? "nav-visible" : "nav-hidden"} ${isScrolled ? "nav-scrolled" : ""}`}>

        {/* LEFT: LOGO */}
        <div className="nav-left">
            <img
                src="/src/assets/logo.png"
                alt="logo"
                className="nav-logo"
                onClick={handleLogoClick}
                style={{ cursor: "pointer" }}
            />
        </div>

        {/* CENTER: LINKS */}
        <div className="nav-center">
            <Link
                to="/"
                onClick={() => setIsLoggedIn(false)}
                className={location.pathname === "/" ? "active-link" : ""}
                >
                Home
            </Link>

            <Link
                to="/products"
                className={location.pathname === "/products" ? "active-link" : ""}
                >
                Products
            </Link>

                <Link
                to="/about"
                className={location.pathname === "/about" ? "active-link" : ""}
                >
                About
                </Link>
        </div>

        {/* RIGHT: ICONS */}
        <div className="nav-right">
            <Bell size={20} />
            <Search size={20} />
            {/* CART ICON WITH BADGE */}
            <Link to="/cart" className="cart-icon">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                    <span className="cart-badge">{cartCount}</span>
                )}
            </Link>
        </div>

    </div>
  );
}

export default Navbar;