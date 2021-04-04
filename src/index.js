import React from "react";
import ReactDOM from "react-dom";
import "./manager/index.css";
import App from "./App";
import {
    CartProvider,
    FilterProvider,
    UserProvider,
    ProductsProvider,
    Auth0Provider
} from "./manager/context";

ReactDOM.render(
    <ProductsProvider>
        <FilterProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterProvider>
    </ProductsProvider>,
    document.getElementById("root"))
