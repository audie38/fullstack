import { React, useEffect, useReducer } from "react";
import axios from "axios";
import "../components/Product";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Helmet } from "react-helmet-async";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="row">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant={"danger"} children={"Error Fetching Data"} />
        ) : (
          products.map((product) => (
            <div
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3 my-2"
              key={product.slug}
            >
              <Product item={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
