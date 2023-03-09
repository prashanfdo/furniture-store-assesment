import ProductListHeader from "components/molecules/product-list/ProductListHeader";
import ProductsGrid from "components/molecules/product-list/ProductsGrid";
import wrapContext from "helpers/wrapContext";
import {
  SearchProductListContextProvider,
  useSearchProductListContext,
} from "./SearchProductListContext";

const SearchProductList: React.FC = () => {
  const { searchText, data } = useSearchProductListContext();

  if (data === undefined) {
    return null;
  }
  return (
    <div className="grid grid-rows-[auto_1fr] py-2 px-8">
      <ProductListHeader name={`Search Results for "${searchText}"`} articleCount={data.total} />
      <ProductsGrid products={data.articles as any} />
    </div>
  );
};

export default wrapContext(SearchProductListContextProvider, SearchProductList);
