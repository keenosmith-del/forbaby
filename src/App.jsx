import TotalPrice from "./TotalPrice";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Cart from "./Cart";

function App() {

  // NAME & LOGIN STATE WITH LOCAL STORAGE PERSISTENCE
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  // LOGIN STATE WITH LOCAL STORAGE PERSISTENCE
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  });

  // CART STATE WITH LOCAL STORAGE PERSISTENCE
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // SYNC NAME, CART, AND LOGIN STATE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
  localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
}, [isLoggedIn]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // check if same product + same color already exists
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id && item.color === product.color
      );

      if (existingItem) {
        // increase quantity
        return prevCart.map((item) =>
          item.id === product.id && item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (product) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === product.id && item.color === product.color
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

// Decrease quantity and remove item if quantity goes to 0
const decreaseQuantity = (product) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === product.id && item.color === product.color
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};

// Remove item from cart regardless of quantity
const removeFromCart = (product) => {
  setCart((prevCart) =>
    prevCart.filter(
      (item) =>
        !(item.id === product.id && item.color === product.color)
    )
  );
};

// Clear entire cart
const clearCart = () => {
  setCart([]);
};

  const location = useLocation();
  
  return (
    <div style={{ position: "relative" }}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={name}
              setName={setName}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
              cart={cart}
              name={name}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              name={name}
              setIsLoggedIn={setIsLoggedIn}
              cart={cart} 
            />
          }
        />
      <Route
        path="/cart"
        element={
        <Cart
          cart={cart}
          name={name}
          setIsLoggedIn={setIsLoggedIn}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
        }
      />
      </Routes>
    </div>
  );
}

export default App;