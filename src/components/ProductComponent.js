import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
const ProductComponent = () => {
  const store = useSelector((state) => state);
  console.log(store.allProducts.products, "store from list");

  return (
    <div className="shop">
      {store.allProducts.products.map((item) => {
        return (
          <div className="card">
            <Link to={`/${item.id}`}>
              <div className="image">
                <img
                  with="100px"
                  height="200px"
                  src={item.image}
                  alt={item.title}
                ></img>
              </div>
              <div className="content">
                <div className="header">{item.title}</div>
                <div>{item.price}</div>
                <div>{item.category}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
