import useSearchProductListQuery from "queries/useSearchProductListQuery";

const useSearchProductList = (searchText: string, page: number) => {
  const { loading, error, data } = useSearchProductListQuery(searchText);
  return {
    loading,
    error,
    data: data?.searchData,
  };
};

export default useSearchProductList;
