import React from "react";

function ServicesList({
  services,
  addToCart,
  incrementFromCart,
  decrementFromCart,
  removeFromCart,
  cart,
}) {
  const getCartQuantity = (serviceId) => {
    const existingItem = cart.find((item) => item.id === serviceId);
    return existingItem ? existingItem.quantity : 0;
  };

  return (
    <div className="row">
      {services.map((service) => (
        <div key={service.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <img
              src={service.image}
              className="card-img-top img-fluid"
              alt={service.name}
            />
            <div className="card-body">
              <h5 className="card-title">{service.name}</h5>
              <p className="card-text">{service.description}</p>
              <p className="card-text">Rs {service.price}</p>
            </div>
            <div className="card-footer">
              {getCartQuantity(service.id) === 0 ? (
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => addToCart(service)}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => decrementFromCart(service)}
                  >
                    -1
                  </button>
                  <span>{getCartQuantity(service.id)} in cart</span>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => incrementFromCart(service)}
                  >
                    +1
                  </button>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => removeFromCart(service.id)}
                  >
                    <i className="bi bi-trash"></i> Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
