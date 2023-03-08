import styled from "@emotion/styled";
import ProductListHeader from "components/molecules/product-list/ProductListHeader";
import ProductsGrid from "components/molecules/product-list/ProductsGrid";
import wrapContext from "helpers/wrapContext";
import {
  SearchProductListContextProvider,
  useSearchProductListContext,
} from "./SearchProductListContext";

const ContainerDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 0.5rem 2em;
`;

const SearchProductList: React.FC = () => {
  const { searchText, data } = useSearchProductListContext();

  if (data === undefined) {
    return null;
  }
  return (
    <ContainerDiv>
      <ProductListHeader name={`Search Results for "${searchText}"`} articleCount={data.total} />
      <ProductsGrid products={data.articles as any} />
    </ContainerDiv>
  );
};

export default wrapContext(SearchProductListContextProvider, SearchProductList);
