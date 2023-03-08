import wrapContext from "helpers/wrapContext";
import { ProductListContextProvider, useProductListContext } from "./ProductListContext";
import styled from "@emotion/styled";
import CategoryList from "components/molecules/product-list/CategoryList";
import ProductListHeader from "components/molecules/product-list/ProductListHeader";
import ProductsGrid from "components/molecules/product-list/ProductsGrid";

const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;
const ContentDiv = styled.div`
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
      <CategoryList categories={data.childrenCategories.list} />
      <ContentDiv>
        <ProductListHeader name={data.name} articleCount={data.articleCount} />
        <ProductsGrid products={data.categoryArticles.articles} />
      </ContentDiv>
    </ContainerDiv>
  );
};

export default wrapContext(ProductListContextProvider, ProductList);
