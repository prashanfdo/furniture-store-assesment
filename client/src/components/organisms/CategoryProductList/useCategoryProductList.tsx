import useCategoryProductListQuery from "queries/useCategoryProductListQuery";

const useCategoryProductList = (categoryId: string) => {
  const { loading, error, data } = useCategoryProductListQuery(categoryId);
  return {
    loading,
    error,
    data: data?.categories?.[0],
  };
};

export default useCategoryProductList;
