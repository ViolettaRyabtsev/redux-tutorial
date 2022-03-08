import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../App.css";
import { selectProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id, "id");

  const fetchDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log(err));
    console.log(response.data, "response");
    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  const product = useSelector((state) => state.selectedProduct);
  console.log(product, "redux");

  return (
    <div className="product-details">
      <img
        with="200px"
        height="300px"
        src={product.image}
        alt={product.title}
      ></img>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <h3>{product.price}</h3>
      <h3>{product.category}</h3>
    </div>
  );
};

export default ProductDetails;
