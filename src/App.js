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
} from "./displays";

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/product" component={SingleProductPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
