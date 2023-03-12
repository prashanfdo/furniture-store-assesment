import { ArticleListHeader } from "components/atoms";
import { ArticleGrid } from "components/molecules";
import useSearchProductList from "./useSearchProductList";

type SearchProductListProps = {
  searchText: string;
  page: number;
};
const SearchProductList: React.FC<SearchProductListProps> = ({ searchText, page }: SearchProductListProps) => {
  const { data, loading, error } = useSearchProductList(searchText, page);

  if (data === undefined) {
    return null;
  }
  return (
    <div className="grid grid-rows-[auto_1fr] py-2 px-8">
      {error && <div>Error Occurred. Please try refreshing the page.</div>}
      <ArticleListHeader name={`Search Results for "${searchText}"`} articleCount={data.total} loading={loading} />
      <ArticleGrid products={data.articles as any} loading={loading} />
    </div>
  );
};

export default SearchProductList;
