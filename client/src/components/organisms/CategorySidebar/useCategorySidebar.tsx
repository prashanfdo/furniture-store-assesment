import useCategoryListQuery from "queries/useCategoryListQuery";

const useCategorySidebar = () => {
  // TODO handle loading and error states
  const { loading, error, data } = useCategoryListQuery();
  return {
    categories: data?.categories?.[0].childrenCategories.list || [],
    loading,
    error,
  };
};

export default useCategorySidebar;
