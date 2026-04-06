import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import aboutImage from "./assets/about-img.png";
import logo from "./assets/logo.png";
import { Mail, Phone, Globe } from "lucide-react";
import { useState } from "react";

function About({ name, setIsLoggedIn, cart }) {
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handleSocialClick = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000); // 3 seconds
  };

  const handleSendMessage = () => {
    // show toast
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

    // clear inputs
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
  };

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

      {/* DIVIDER */}
      <div className="header-divider"></div>

      {/* NAVBAR */}
      <Navbar
        setIsLoggedIn={setIsLoggedIn}
        cartCount={cart.reduce((t, i) => t + i.quantity, 0)}
      />

      {/* DIVIDER */}
      <div className="header-divider"></div>

      <div className="about-layout">

      {/* LEFT: IMAGE + LOGO STACK */}
      <div className="about-left">
        <img
          src={aboutImage}
          alt="about"
          className="about-image"
        />

        <img
          src={logo}
          alt="logo"
          className="about-logo"
        />
      </div>

      {/* MIDDLE: DESCRIPTION */}
      <div className="about-middle">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.

          <br /><br />

          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.
          Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,
          est eros bibendum elit, nec luctus magna felis sollicitudin mauris.

          <br /><br />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.

          <br /><br />

          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.
          Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,
          est eros bibendum elit, nec luctus magna felis sollicitudin mauris.

          <br /><br />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.

          <br /><br />

          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus.
          Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,
          est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
        </p>

        <div className="about-socials">

          <Mail size={20} onClick={handleSocialClick} />
          <Phone size={20} onClick={handleSocialClick} />
          <Globe size={20} onClick={handleSocialClick} />

          {/* Instagram */}
          <svg onClick={handleSocialClick} width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5"/>
            <circle cx="17" cy="7" r="1.5" fill="white"/>
          </svg>

          {/* X */}
          <svg onClick={handleSocialClick} width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 4L20 20M20 4L4 20" stroke="white" strokeWidth="1.5"/>
          </svg>

          {/* TikTok */}
          <svg onClick={handleSocialClick} width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M14 3V14.5A3.5 3.5 0 1 1 10.5 11" stroke="white" strokeWidth="1.5"/>
            <path d="M14 3C15.5 5 17.5 6 20 6" stroke="white" strokeWidth="1.5"/>
          </svg>

        </div>
      </div>

      {/* RIGHT: CONTACT */}
      <div className="about-right">
        <div className="contact-card">
          <h2>Contact</h2>

          <input
            placeholder="Your name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input
            placeholder="Your email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          ></textarea>

          <button className="contact-btn" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>

    </div>

    {showToast && (
    <div className="cart-toast">
      <div>
        <div className="toast-title">Message sent</div>
        <div className="toast-sub">We’ll get back to you soon</div>
      </div>
    </div>
  )}
    </div>
  );
}

export default About;