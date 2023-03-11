import constate from "constate";
import useSearchProductListQuery from "queries/useSearchProductListQuery";

type SearchProductListContextProviderProps = {
  searchText: string;
  page: number;
};
const [SearchProductListProvider, useSearchProductListContext] = constate(
  ({ searchText, page }: SearchProductListContextProviderProps) => {
    const { loading, error, data } = useSearchProductListQuery(searchText);
    return {
      searchText,
      page,
      loading,
      error,
      data: data?.searchData,
    };
  },
);

export { useSearchProductListContext };

export default SearchProductListProvider;
