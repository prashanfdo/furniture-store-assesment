import ProductList from "components/organisms/ProductList";
import React from "react";
import { useMatches } from "react-router-dom";

export default function CategoryPage() {
  const matches = useMatches();

  const categoryId = matches?.[0]?.params?.category || "156126";

  return (
    <>
      <ProductList categoryId={categoryId} />
    </>
  );
}
