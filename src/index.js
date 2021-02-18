import React from "react";
import ReactDOM from "react-dom";
import "./manager/index.css";
import App from "./App";
import { ProductsProvider } from "./manager/context/products_context";
import { FilterProvider } from "./manager/context/filter_context";
import { CartProvider } from "./manager/context/cart_context";
import { UserProvider } from "./manager/context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(<App />, document.getElementById("root"));
