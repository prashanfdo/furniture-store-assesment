import constate from "constate";
import useCategoryListQuery from "queries/useCategoryListQuery";

type CategorySidebarProviderProps = {
  selectedCategoryId?: string;
};
const [CategorySidebarProvider, useCategorySidebarContext] = constate(
  ({ selectedCategoryId }: CategorySidebarProviderProps) => {
    // TODO handle loading and error states
    const { data } = useCategoryListQuery();
    return {
      selectedCategoryId,
      categories: data?.categories?.[0].childrenCategories.list || [],
    };
  },
);

export { useCategorySidebarContext };

export default CategorySidebarProvider;
