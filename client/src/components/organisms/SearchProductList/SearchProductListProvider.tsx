import constate from "constate";
import useGetSearchProductList from "queries/useGetSearchProductList";

type SearchProductListContextProviderProps = {
  searchText: string;
  page: number;
};
const [SearchProductListProvider, useSearchProductListContext] = constate(
  ({ searchText, page }: SearchProductListContextProviderProps) => {
    const { loading, error, data } = useGetSearchProductList(searchText);
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
