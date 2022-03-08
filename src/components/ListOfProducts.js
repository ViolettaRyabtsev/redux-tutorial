// action creator--> action --> dispatch --> reducers --> store
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../App.css";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { actionCreators } from "../redux/index";
import { bindActionCreators } from "redux";
// import { setProducts } from "../redux/actions/productActions";

const ListOfProducts = () => {
  const dispatch = useDispatch();

  const { setProducts } = bindActionCreators(actionCreators, dispatch);

  const fetchData = async () => {
    let response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    console.log(response.data, "response");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const store = useSelector((state) => state);
  console.log(store.allProducts.products, "store from list");

  return (
    <div className="ui-grid-container">
      <ProductComponent />
    </div>
  );
};

export default ListOfProducts;
