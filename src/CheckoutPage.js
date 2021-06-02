import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./CheckoutPage.css";
import { useStateValue } from "./Stateprovider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

import { db } from "./firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  //   const stripe = useStripe();
  //   const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [clientSecret, setClientSecret] = useState(true);

  console.log("THE SECRET IS >>>", clientSecret);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     setProcessing(true);

  //     const payload = await stripe
  //       .confirmCardPayment(clientSecret, {
  //         payment_method: {
  //           card: elements.getElement(CardElement),
  //         },
  //       })
  //       .then(({ paymentIntent }) => {
  //         // paymentIntent = payment confirmation

  //         db.collection("users")
  //           .doc(user?.uid)
  //           .collection("orders")
  //           .doc(paymentIntent.id)
  //           .set({
  //             basket: basket,
  //             amount: paymentIntent.amount,
  //             created: paymentIntent.created,
  //           });

  //         setSucceeded(true);
  //         setError(null);
  //         setProcessing(false);

  //         dispatch({
  //           type: "EMPTY_BASKET",
  //         });

  //         history.replace("/orders");
  //       });
  //   };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const goToHome = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
    history.replace("/");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/cart">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Name</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            {/* <p>{user?.email}</p> */}
            <p>123 React Lane</p>
            <p>Chicago, IL</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Billing Address</h3>
          </div>
          <div className="payment__address">
            {/* <p>{user?.email}</p> */}
            <p>123 React Lane</p>
            <p>Chicago, IL</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              // <h1 className="checkout__title">Your shopping Basket</h1>

              <div className="checkoutProduct">
                <img className="checkoutProduct__image1" src={item.image} />

                <div className="checkoutProduct__info">
                  <p className="checkoutProduct__title">{item.title}</p>
                  <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button
                  onClick={goToHome}
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
