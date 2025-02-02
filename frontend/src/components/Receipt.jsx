import React from "react";

export default function Receipt({ cart, totalAmount, closeReceipt }) {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        className="bg-white rounded p-4"
        style={{
          width: "400px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h4 className="text-center mb-3">Receipt</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>Rs {item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5 className="text-center">Grand Total: Rs {totalAmount}</h5>
        <button
          className="btn btn-primary btn-block mt-3"
          onClick={closeReceipt}
        >
          Close Receipt
        </button>
      </div>
    </div>
  );
}
