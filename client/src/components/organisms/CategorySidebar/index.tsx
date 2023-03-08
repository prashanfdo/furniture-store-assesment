import CategoryList from "components/molecules/product-list/CategoryList";
import wrapContext from "helpers/wrapContext";
import {
  CategorySidebarContextProvider,
  useCategorySidebarContext,
} from "./CategorySidebarContext";

const CategorySidebar: React.FC = () => {
  const { categories, selectedCategoryId } = useCategorySidebarContext();
  return (
    <>
      <CategoryList categories={categories} selectedCategoryId={selectedCategoryId} />
    </>
  );
};

export default wrapContext(CategorySidebarContextProvider, CategorySidebar);
