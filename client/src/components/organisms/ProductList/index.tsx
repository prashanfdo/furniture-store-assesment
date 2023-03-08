import styled from "@emotion/styled";
import ProductListHeader from "components/molecules/product-list/ProductListHeader";
import ProductsGrid from "components/molecules/product-list/ProductsGrid";
import wrapContext from "helpers/wrapContext";
import { ProductListContextProvider, useProductListContext } from "./ProductListContext";

const ContainerDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 0.5rem 2em;
`;

const ProductList: React.FC = () => {
  const { data } = useProductListContext();

  if (data === undefined) {
    return null;
  }
  return (
    <ContainerDiv>
      <ProductListHeader name={data.name} articleCount={data.articleCount} />
      <ProductsGrid products={data.categoryArticles.articles} />
    </ContainerDiv>
  );
};

export default wrapContext(ProductListContextProvider, ProductList);
