import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import axios from "axios";
import { Store } from "../store";

const Product = ({ item }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
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
  return (
    <div class="card">
      <Link to={`/product/${item._id}`}>
        <img src={item.image} alt={item.name} className="card-img-top" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/product/${item._id}`}>{item.name}</Link>
        </h5>
        <p className="card-text">
          <strong>${item.price}</strong>
        </p>
        <p className="card-text">
          <Rating value={item.rating} text={item.numReviews + " Reviews"} />
        </p>
        {item.countInStock === 0 ? (
          <button className="btn btn-light" disabled>
            Out of Stock
          </button>
        ) : (
          <button
            onClick={() => addToCartHandler(item)}
            className="btn btn-dark"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
