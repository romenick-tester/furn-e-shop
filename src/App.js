import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  HomePage,
  AboutPage,
  CartPage,
  ProductsPage,
  SingleProductPage,
  CheckoutPage,
  ErrorPage,
  PrivateRoute,
} from "./displays";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/product/:id?" exact component={SingleProductPage} />
        <PrivateRoute path="/checkout" exact component={CheckoutPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
