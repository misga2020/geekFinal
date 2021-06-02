import React from "react";
import "./Checkout.css";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("basket", basket);
  const removeFromBasket = (id) => {
    console.log(id);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h3>
          STAY HOME AND SHOP ONLINE.YOU ARE TOO PRETTY TO HAVE TO LOOK FOR A
          PARKING SPOT.
        </h3>
        {/* <h1>{basket[0].product.description}</h1> */}
        <div>
          {basket?.map((item) => (
            // <h1 className="checkout__title">Your shopping Basket</h1>

            <div className="checkoutProduct">
              <img className="checkoutProduct__image1" src={item.image} />

              <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>
                <p className="checkoutProduct__price">
                  <small>$</small>
                  <strong>{item.price}</strong>
                </p>
                <button onClick={() => removeFromBasket(item.id)}>
                  Remove from Basket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
