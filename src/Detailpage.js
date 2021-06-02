import React from "react";
import "./Detailpage.css";
import { useStateValue } from "./Stateprovider";

function Detailpage() {
  const [{ basket, detail, quantity }, dispatch] = useStateValue();
  console.log("basket", basket);
  console.log(quantity);
  const addToBasket = (product) => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      payload: product,
    });
  };
  return (
    <div>
      {detail.map((product) => (
        <div className="details">
          <img className="details__image" src={product.image} />

          <div className="details__info">
            <h3>{product.title}</h3>
            <p className="details__price">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <h3>{product.category}</h3>
            <p className="details__title">{product.description}</p>

            {/* <button onClick={() => removeFromBasket(id)}>
              Remove from Basket
            </button> */}
            <button onClick={() => addToBasket(product)}>Add to Basket</button>
            {/* <div>
              <select className="details__qty">
                <option value="1"> Qty: 1</option>
              </select>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Detailpage;
