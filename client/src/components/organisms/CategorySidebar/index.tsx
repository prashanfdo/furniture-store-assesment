import wrapContext from "helpers/wrapContext";
import CategorySidebarProvider, { useCategorySidebarContext } from "./CategorySidebarProvider";
import { CategoryList } from "components/molecules";

const CategorySidebar: React.FC = () => {
  const { categories, selectedCategoryId } = useCategorySidebarContext();
  return (
    <>
      <CategoryList categories={categories} selectedCategoryId={selectedCategoryId} />
    </>
  );
};

export default wrapContext(CategorySidebarProvider, CategorySidebar);
