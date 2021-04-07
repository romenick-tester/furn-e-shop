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
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>,
    document.getElementById("root"))
