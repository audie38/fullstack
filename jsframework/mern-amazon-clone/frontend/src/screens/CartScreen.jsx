import { React, useContext } from "react";
import { Store } from "../store";
import { Helmet } from "react-helmet-async";
import Message from "../components/Message";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CartScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({
      type: "CART_REMOVE_ITEM",
      payload: item,
    });
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };

  return (
    <div className="container my-5">
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <div className="row">
        <div className="col-md-8">
          {cartItems.length === 0 ? (
            <Message children={"Cart is empty"}>
              <Link to="/">Go Shopping</Link>
            </Message>
          ) : (
            <ul className="list-group">
              {cartItems.map((item) => (
                <li className="list-group-item" key={item._id}>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      />{" "}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </div>
                    <div className="col-md-3">
                      <button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        className="btn btn-light"
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </button>{" "}
                      <span>{item.quantity}</span>{" "}
                      <button
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        className="btn btn-light"
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </button>
                    </div>
                    <div className="col-md-3">${item.price}</div>
                    <div className="col-md-2">
                      <button
                        className="btn btn-light"
                        onClick={() => removeItemHandler(item)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                    items) : ${" "}
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <button
                        onClick={checkoutHandler}
                        className="btn btn-dark"
                        disabled={cartItems.length === 0}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
