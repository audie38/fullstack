import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store";

const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Amazona
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/cart">
              <i className="fas fa-shopping-cart px-1"></i>
              Cart
              {cart.cartItems.length > 0 && (
                <span class="badge rounded-pill bg-danger mx-1">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </span>
              )}
            </Link>
            <Link className="nav-link" to="/">
              <i className="fas fa-user px-1"></i>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
