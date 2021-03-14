import React from "react";
import { useFilterContext } from "../../manager";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();

  return <GridView products={products}>Product List</GridView>
}

export default ProductList;
