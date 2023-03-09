import wrapContext from "helpers/wrapContext";
import SearchProductListProvider, { useSearchProductListContext } from "./SearchProductListProvider";
import { ArticleListHeader } from "components/atoms";
import { ArticleGrid } from "components/molecules";

const SearchProductList: React.FC = () => {
  const { searchText, data } = useSearchProductListContext();

  if (data === undefined) {
    return null;
  }
  return (
    <div className="grid grid-rows-[auto_1fr] py-2 px-8">
      <ArticleListHeader name={`Search Results for "${searchText}"`} articleCount={data.total} />
      <ArticleGrid products={data.articles as any} />
    </div>
  );
};

export default wrapContext(SearchProductListProvider, SearchProductList);
