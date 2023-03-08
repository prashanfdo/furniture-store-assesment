import ProductList from "components/organisms/ProductList";
import React from "react";

export default function HomePage() {
  return (
    <>
      <ProductList searchText="asd" page={1} />
    </>
  );
}
