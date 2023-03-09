import { ArticleListHeader } from "components/atoms";
import { ArticleGrid } from "components/molecules";
import wrapContext from "helpers/wrapContext";
import CategoryProductListProvider, { useCategoryProductList } from "./CategoryProductListProvider";

const ProductList: React.FC = () => {
  const { data } = useCategoryProductList();

  if (data === undefined) {
    return null;
  }
  return (
    <div className="grid grid-rows-[auto_1fr] py-2 px-8">
      <ArticleListHeader name={data.name} articleCount={data.articleCount} />
      <ArticleGrid products={data.categoryArticles.articles} />
    </div>
  );
};

export default wrapContext(CategoryProductListProvider, ProductList);
