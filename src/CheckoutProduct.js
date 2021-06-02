import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./Stateprovider";

function CheckoutProducts({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = (id) => {
    // console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={() => removeFromBasket(id)}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
