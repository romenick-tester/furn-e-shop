import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";
//import { useProductsContext } from "../manager";

const ProductsPage = () => {
  //const data = useProductsContext();

  return (
    <Wrapper className="page">
      <h1>hello</h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage;
