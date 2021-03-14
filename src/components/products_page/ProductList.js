import React from "react";
import { useFilterContext } from "../../manager";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your query...
      </h5>
    )
  }

  if (!grid_view) {
    return <ListView products={products} />
  }

  return <GridView products={products}>Product List</GridView>
}

export default ProductList;
