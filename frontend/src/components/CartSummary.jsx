import React from "react";

export default function CartSummary({
  cart,
  totalAmount,
  removeFromCart,
  handleCheckout,
}) {
  return (
    <div
      className="p-3 bg-light rounded border"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <h4 className="text-center">Cart Summary</h4>
      {cart.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  {item.name} (x{item.quantity})
                  <br />
                  <small className="text-muted">
                    Rs {item.price} x {item.quantity} = Rs{" "}
                    {item.price * item.quantity}
                  </small>
                </div>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h5 className="text-center">
            Total: <span className="text-primary">Rs {totalAmount}</span>
          </h5>
          <button
            className="btn btn-success btn-block mt-3"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
