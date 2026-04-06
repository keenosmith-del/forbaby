import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, Search, ShoppingCart } from "lucide-react";
import Navbar from "./Navbar";


// first row
import product1black from "./assets/1/1_1B.avif";
import product2black from "./assets/2/2_1B.avif";
import product3black from "./assets/3/1_1B.avif";

import product1white from "./assets/1/1_1W.avif";
import product2white from "./assets/2/2_1W.avif";
import product3white from "./assets/3/2_1W.avif";

//second row
import product4black from "./assets/4/1_1B.avif";
import product5black from "./assets/5/1_1B.avif";
import product6black from "./assets/6/1_1B.avif";

import product4white from "./assets/4/1_1W.webp";
import product5white from "./assets/5/2_1W.avif";
import product6white from "./assets/6/2_1W.avif";

//third row
import product7black from "./assets/7/1_1B.avif";
import product8black from "./assets/8/1_1B.avif";
import product9black from "./assets/9/1_1B.avif";

import product7white from "./assets/7/2_1W.avif";
import product8white from "./assets/8/2_1W.avif";
import product9white from "./assets/9/2_1W.avif";

// different colours for a product
import product9sunset from "./assets/9/3_1S.avif";
import product9wave from "./assets/9/4_1WA.avif";
import product9olive from "./assets/9/5_1O.avif";

//fourth row
import product10black from "./assets/10/1_1B.avif";
import product11black from "./assets/11/1_1B.avif";
import product12black from "./assets/12/1_1B.avif";

import product10white from "./assets/10/2_1W.avif";
import product11white from "./assets/11/2_1W.avif";
import product12white from "./assets/12/2_1W.avif";

// fifth row
import product13black from "./assets/13/1_1B.avif";
import product14black from "./assets/14/1_1B.avif";
import product15black from "./assets/15/1_1B.avif";

import product13white from "./assets/13/2_1W.avif";
import product14white from "./assets/14/1_1W.avif";
import product15white from "./assets/15/2_1W.avif";

// sixth row
import product16black from "./assets/16/1_1B.avif";
import product17black from "./assets/17/1_1B.avif";
import product18black from "./assets/18/1_1B.avif";

import product16white from "./assets/16/2_1W.avif";
import product17white from "./assets/17/2_1W.avif";
import product18white from "./assets/18/2_1W.avif";


const products = [
  {
    id: 1,
    name: "Sonos Play",
    description: "Portable, waterproof speaker built for home and beyond",
    price: "R100",
    imageBlack: product1black,
    imageWhite: product1white,
    colors: ["Black", "White"],
  },
  {
    id: 2,
    name: "Era 100 SL",
    description: "Compact stereo sound and rich bass, without voice control",
    price: "R200",
    imageBlack: product2black,
    imageWhite: product2white,
    colors: ["Black", "White"],
  },
    {
    id: 3,
    name: "Sonos Ace",
    description: "Premium noise-cancelling headphones with all-day comfort",
    price: "R900",
    imageBlack: product3black,
    imageWhite: product3white,
    colors: ["Black", "White"],
  },
  {
    id: 4,
    name: "2 Room Set with Era 100 SL",
    description: "2x Era 100 SL",
    price: "R400",
    imageBlack: product4black,
    imageWhite: product4white,
    colors: ["Black", "White"],
  },
  {
    id: 5,
    name: "Move 2",
    description: "Flagship portable speaker built for home and outdoors",
    price: "R500",
    imageBlack: product5black,
    imageWhite: product5white,
    colors: ["Black", "White"],
  },
  {
    id: 6,
    name: "Premium Entertainment Set with Arc Ultra",
    description: "Arc Ultra + Sub 4",
    price: "R600",
    imageBlack: product6black,
    imageWhite: product6white,
    colors: ["Black", "White"],
  },
  {
    id: 7,
    name: "Beam (Gen 2)",
    description: "Powerful compact soundbar for TVs up to 65 inches",
    price: "R700",
    imageBlack: product7black,
    imageWhite: product7white,
    colors: ["Black", "White"],
  },
  {
    id: 8,
    name: "Sub Mini",
    description: "Compact subwoofer for clean, balanced bass",
    price: "R800",
    imageBlack: product8black,
    imageWhite: product8white,
    colors: ["Black", "White"],
  },
  {
    id: 9,
    name: "Roam 2",
    description: "Ultra-portable, waterproof speaker built for travel",
    price: "R900",
    imageBlack: product9black,
    imageWhite: product9white,
    imageSunset: product9sunset,
    imageWave: product9wave,
    imageOlive: product9olive,
    colors: ["Black", "White", "Sunset", "Wave", "Olive"],
  },
    {
    id: 10,
    name: "Sub 4",
    description: "Powerful subwoofer for deep, distortion-free bass",
    price: "R900",
    imageBlack: product10black,
    imageWhite: product10white,
    colors: ["Black", "White"],
  },
    {
    id: 11,
    name: "Immersive Music Set",
    description: "2x Era 300",
    price: "R900",
    imageBlack: product11black,
    imageWhite: product11white,
    colors: ["Black", "White"],
  },
    {
    id: 12,
    name: "Era 300",
    description: "Spatial audio speaker built for Dolby Atmos",
    price: "R900",
    imageBlack: product12black,
    imageWhite: product12white,
    colors: ["Black", "White"],
  },
  {
    id: 13,
    name: "Five",
    description: "Flagship hifi speaker with deep bass and line in",
    price: "R900",
    imageBlack: product13black,
    imageWhite: product13white,
    colors: ["Black", "White"],
  },
    {
    id: 14,
    name: "Ultimate Immersive Set with Arc Ultra",
    description: "Arc Ultra + Sub 4 + 2x Era 300. Spatial audio speaker built for Dolby Atmos",
    price: "R300",
    imageBlack: product14black,
    imageWhite: product14white,
    colors: ["Black", "White"],
  },
    {
    id: 15,
    name: "Entertainment Set with Beam",
    description: "Beam + Sub Mini",
    price: "R900",
    imageBlack: product15black,
    imageWhite: product15white,
    colors: ["Black", "White"],
  },
    {
    id: 16,
    name: "Sonos Ers 300 Stand (Pair)",
    description: "Stands designed to perfectly complement the Era 300 speakers",
    price: "R900",
    imageBlack: product16black,
    imageWhite: product16white,
    colors: ["Black", "White"],
  },
    {
    id: 17,
    name: "Ray",
    description: "Compact soundbar for smaller rooms and TVs",
    price: "R900",
    imageBlack: product17black,
    imageWhite: product17white,
    colors: ["Black", "White"],
  },
    {
    id: 18,
    name: "Pro-Ject T2 Super Phono Turntable",
    description: "High-end turntable with precision engineering",
    price: "R900",
    imageBlack: product18black,
    imageWhite: product18white,
    colors: ["Black", "White"],
  },
];

function Products({ addToTotal, addToCart, cart, name, setIsLoggedIn, }) {
    const [selectedColors, setSelectedColors] = useState({});
    const navigate = useNavigate();

    // Toast state - display message when product is added to cart
    const [toast, setToast] = useState(null);

    // Scroll to top button state
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* PRODUCTS SECTION */}
        <div className="container mt-4 products-section">

        <div className="row g-5">
            {products.map((product) => (
            <div className="col-md-4 mb-4 d-flex" key={product.id}>
                <div className="card product-card">

            <img
              src={
                product[
                  "image" + (selectedColors[product.id] || "Black")
                ]
              }

              className="card-img-top img-fluid"
              alt={product.name}
            />

                    <div className="card-body">

                        <h5 className="product-title">{product.name}</h5>

                    <div className="color-options">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className={`color-dot ${color.toLowerCase()} ${
                            (selectedColors[product.id] || "Black") === color
                              ? "selected"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedColors({ ...selectedColors, [product.id]: color })
                          }
                        ></span>
                      ))}
                    </div>

                        <p className="product-desc">{product.description}</p>

                        <p className="product-price">{product.price}</p>

                        <div className="product-divider"></div>

                        <button
                          className="add-to-cart-btn"
                          onClick={() => {
                            const selectedColor = selectedColors[product.id] || "Black";

                            const item = {
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              color: selectedColor,
                              image: product["image" + selectedColor],
                            };

                            addToCart(item);

                            // SHOW TOAST
                            setToast(item);

                            // HIDE AFTER 4s
                            setTimeout(() => {
                              setToast(null);
                            }, 4000);
                          }}
                        >
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
            ))}
        </div>
        </div>

      {/* SCROLL TO TOP BUTTON */}
      {showTopBtn && (
      <button
        className="back-to-top"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        ↑
      </button>
    )}

    {/* TOAST */}
    {toast && (
      <div className="cart-toast">
        <img src={toast.image} alt={toast.name} />
        <div className="toast-text">
          <div className="toast-title">
            {toast.name} ({toast.color})
          </div>
          <div className="toast-sub">Added to cart</div>
        </div>
      </div>
    )}
    </div>
    );
}

export default Products;