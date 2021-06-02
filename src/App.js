import "./App.css";
import Header from "./Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import React, { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import Product from "./Product";
import { loadStripe } from "@stripe/stripe-js";
// import CheckoutProducts from "./CheckoutProduct";
import Detailpage from "./Detailpage";
import CheckoutPage from "./CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51Hf9EsIjq2KMm1vIrtyaI9OtGTvf45UJtZJgN3TPTmOaTQ5IAqHwTs4YIhZCQNNphj6NkIAFZN75pLloPCwMrsZz00SVhcXIq6"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Header />
            <Checkout />
          </Route>
          <Route path="/productdetail">
            <Header />
            <Detailpage />
          </Route>
          <Route path="/checkoutpage">
            <Elements stripe={promise}>
              <Header />
              <CheckoutPage />
            </Elements>
          </Route>
          <Route path="/">
            <Header />

            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
