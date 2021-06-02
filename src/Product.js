import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./Stateprovider";
function Product() {
  const [{ basket, detail }, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  console.log(basket);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  const addToBasket = (product) => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      payload: product,
    });
  };
  const addToDetail = (product) => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_DETAIL",
      payload: product,
    });
  };
  console.log(detail);
  return (
    <>
      {/* <Link to="/productdetail"> */}
      <h1 style={{ textAlign: "center" }}>
        JUST LET ME SHOP & NO ONE GETS HURT
      </h1>
      <Link to="/productdetail" className="aa">
        <div className="product__row">
          {products.map((product) => (
            <div className="product">
              <div className="product__info">
                <h4>{product.title}</h4>
                {/* <p>{product.description}</p> */}
                <p className="product__price">
                  <small>$</small>
                  <strong>{product.price}</strong>
                </p>
              </div>

              <img
                src={product.image}
                alt=""
                onClick={() => addToDetail(product)}
              />
              {/* </Link> */}
              {/* <button onClick={() => addToBasket(product)}>Add to Basket</button> */}

              {/* <button>detail</button> */}
            </div>
          ))}
        </div>
      </Link>
    </>
  );
}

export default Product;
