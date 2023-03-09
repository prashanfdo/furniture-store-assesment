import constate from "constate";
import useGetCategoryProductList from "queries/useGetCategoryProductList";

type CategoryProductListProviderProps = {
  categoryId: string;
};
const [CategoryProductListProvider, useCategoryProductList] = constate(
  ({ categoryId }: CategoryProductListProviderProps) => {
    const { loading, error, data } = useGetCategoryProductList(categoryId);
    return {
      loading,
      error,
      data: data?.categories?.[0],
    };
  },
);

export { useCategoryProductList };

export default CategoryProductListProvider;
