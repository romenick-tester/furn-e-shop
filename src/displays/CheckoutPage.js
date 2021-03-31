import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../manager";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout"/>
      <Wrapper className="page section-center">
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div``

export default CheckoutPage;
