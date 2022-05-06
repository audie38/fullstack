import { React, useContext, useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet-async";
import { Store } from "../store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }

    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });

    navigate("/cart");
  };

  return (
    <div className="container my-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <div className="row">
          <div className="col-md-5">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-4">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Helmet>
                  <title>{product.name}</title>
                </Helmet>
                <h3>{product.name}</h3>
              </li>
              <li className="list-group-item">
                <Rating
                  value={product.rating}
                  text={product.numReviews + " Reviews"}
                />
              </li>
              <li className="list-group-item">
                <p>Price: ${product.price}</p>
              </li>
              <li className="list-group-item">
                <p>Description: {product.description}</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col">Price:</div>
                      <div className="col">${product.price}</div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col">Status:</div>
                      <div className="col">
                        {product.countInStock > 0 ? (
                          <span class="badge bg-success">In Stock</span>
                        ) : (
                          <span class="badge bg-secondary">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    {product.countInStock > 0 && (
                      <div className="row">
                        <button
                          onClick={addToCartHandler}
                          className="btn btn-dark"
                        >
                          Add to Cart
                        </button>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
