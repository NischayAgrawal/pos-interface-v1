import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ServicesList from "../components/ServicesList";
import CartSummary from "../components/CartSummary";
import Receipt from "../components/Receipt";
import { fetchServices } from "../utils/fetchServices";

export default function POS() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000); // Set a reasonable max limit

  useEffect(() => {
    const getServices = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    getServices();
  }, []);

  const addToCart = (service) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === service.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...service, quantity: 1 }];
      }
    });
  };

  const incrementFromCart = (service) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decrementFromCart = (service) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === service.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== service.id);
      } else {
        return prevCart.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setShowReceipt(true);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // BONUS FILTER FEATURE
  const filteredServices = services.filter((service) => {
    const isInPriceRange =
      parseInt(service.price) >= minPrice &&
      parseInt(service.price) <= maxPrice;
    const matchesSearchTerm = service.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return isInPriceRange && matchesSearchTerm;
  });

  return (
    <div>
      <Header />
      <main className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label>Price Range</label>
              <div className="d-flex justify-content-between">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Min Price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span className="mx-2">to</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Max Price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            {isLoading ? (
              <p>Loading services...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              <ServicesList
                services={filteredServices}
                cart={cart}
                addToCart={addToCart}
                incrementFromCart={incrementFromCart}
                decrementFromCart={decrementFromCart}
                removeFromCart={removeFromCart}
              />
            )}
          </div>
          <div className="col-lg-4">
            <CartSummary
              cart={cart}
              totalAmount={totalAmount}
              removeFromCart={removeFromCart}
              handleCheckout={handleCheckout}
            />
          </div>
        </div>
        {showReceipt && (
          <Receipt
            cart={cart}
            totalAmount={totalAmount}
            closeReceipt={() => setShowReceipt(false)}
          />
        )}
      </main>
    </div>
  );
}
