import constate from "constate";
import useGetCategoryList from "queries/useGetCategoryList";

type CategorySidebarProviderProps = {
  selectedCategoryId?: string;
};
const [CategorySidebarProvider, useCategorySidebarContext] = constate(
  ({ selectedCategoryId }: CategorySidebarProviderProps) => {
    // TODO handle loading and error states
    const { data } = useGetCategoryList();
    return {
      selectedCategoryId,
      categories: data?.categories?.[0].childrenCategories.list || [],
    };
  },
);

export { useCategorySidebarContext };

export default CategorySidebarProvider;
