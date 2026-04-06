import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import TotalPrice from "./TotalPrice";

function Cart({ cart, name, setIsLoggedIn, increaseQuantity, decreaseQuantity, removeFromCart, clearCart }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) =>
        sum + Number(item.price.replace("R", "")) * item.quantity,
    0
);

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
        <Navbar
            setIsLoggedIn={setIsLoggedIn}
            cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        />

        {/* DIVIDER 2 */}
        <div className="header-divider"></div>

        {/* CART CONTENT */}
        <div className="cart-layout">

        {/* LEFT: ITEMS */}
        <div className="cart-items">
            <h1>
                Cart {`(${cart.reduce((t, i) => t + i.quantity, 0)})`}
            </h1>

            {cart.length === 0 ? (
            <p>Your cart is empty</p>
            ) : (
            cart.map((item, index) => (
                <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.color}</p>
                    <p>{item.price}</p>

                    <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item)}>+</button>
                    </div>
                </div>

                <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item)}
                >
                    ✕
                </button>
                </div>
            ))
            )}
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="cart-summary">
            <h2>Order Summary</h2>

            <TotalPrice total={total} />

            <div className="cart-actions">
                <button className="clear-cart-btn" onClick={clearCart}>
                    Clear Cart
                </button>

                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Cart;