import constate from "constate";
import useCategoryProductListQuery from "queries/useCategoryProductListQuery";

type CategoryProductListProviderProps = {
  categoryId: string;
};
const [CategoryProductListProvider, useCategoryProductList] = constate(
  ({ categoryId }: CategoryProductListProviderProps) => {
    const { loading, error, data } = useCategoryProductListQuery(categoryId);
    return {
      loading,
      error,
      data: data?.categories?.[0],
    };
  },
);

export { useCategoryProductList };

export default CategoryProductListProvider;
