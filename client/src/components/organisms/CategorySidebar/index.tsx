import { CategoryList } from "components/molecules";
import useCategorySidebar from "./useCategorySidebar";

type CategorySidebarProviderProps = {
  selectedCategoryId?: string;
};
const CategorySidebar: React.FC<CategorySidebarProviderProps> = ({
  selectedCategoryId,
}: CategorySidebarProviderProps) => {
  const { categories, loading, error } = useCategorySidebar();
  return (
    <>
      <CategoryList loading={loading} error={!!error} categories={categories} selectedCategoryId={selectedCategoryId} />
    </>
  );
};

export default CategorySidebar;
