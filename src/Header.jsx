import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Header({ name, setIsLoggedIn }) {
  const navigate = useNavigate();

  return (
    <div className="products-header">
      
      {/* TOP ROW */}
      <div className="profile-section">
        <User size={28} />
        <span className="welcome-text">Welcome {name}</span>

        <button
          className="logout-button"
          onClick={() => {
            setIsLoggedIn(false);
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>

      {/* DIVIDER 1 */}
      <div className="header-divider"></div>

      {/* NAVBAR */}
      <Navbar />

      {/* DIVIDER 2 */}
      <div className="header-divider"></div>

    </div>
  );
}

export default Header;