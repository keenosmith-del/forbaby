import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ name, setName, isLoggedIn, setIsLoggedIn }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null); 
  const navigate = useNavigate(); 

  // Focus on name input when component mounts
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  // Redirect to products if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/products");
    }
  }, [isLoggedIn]);

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

    // Handle login/logout logic
    const handleLogin = () => {
    if (!isLoggedIn) {
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        const newErrors = {
        name: name.trim() === "" ? "Please enter your name" : "",
        email:
            email.trim() === ""
            ? "Please enter your email"
            : !emailValid
            ? "Please enter a valid email"
            : "",
        };

        setErrors(newErrors);

        // Focus logic
        if (newErrors.name) {
        nameRef.current.focus();
        } else if (newErrors.email) {
        emailRef.current.focus();
        }

        if (newErrors.name || newErrors.email) {
        // remove error after 2 seconds
        setTimeout(() => {
            setErrors({ name: "", email: "" });
        }, 2000);

        return;
        }

        setIsLoggedIn(true);
        navigate("/products");
    } else {
        setIsLoggedIn(false);
        setName("");
        setEmail("");
        setErrors({ name: false, email: false });
    }
    };

  return (
    <div className="home-container">
      
      {/* LEFT SIDE (Login) */}
      <div className="left-side">
        {!isLoggedIn ? (
        <>
        <h2 className="login-title">Login</h2>

        <label className="input-label">your name</label>
        <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "input-error" : ""}
            ref={nameRef}
            onKeyDown={(e) => {
                if (e.key === "Enter") handleLogin();
            }}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label className="input-label">your email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "input-error" : ""}
          ref={emailRef}
          onKeyDown={(e) => {
              if (e.key === "Enter") handleLogin();
        }}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
   
        <button className="login-button" onClick={handleLogin}>
            Login
        </button>
        </>
        ) : (
          <>
            <h2 className="login-title">Welcome back, {name}</h2>
            <button className="login-button" onClick={handleLogin}>
              Logout
            </button>
          </>
        )}
      </div>

      {/* RIGHT SIDE (Logo) */}
      <div className="right-side">
        <img src="/src/assets/logo.png" alt="logo" className="logo"/>
      </div>

        {/* bottom banner */} 
        <div className="bottom-banner">
            <div className="banner-center">© keeno smith</div>
            <div className="banner-right">j♡</div>
        </div>
    </div>
  );
}

export default Home;