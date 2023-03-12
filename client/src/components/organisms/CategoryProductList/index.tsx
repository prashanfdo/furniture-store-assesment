import { ArticleListHeader } from "components/atoms";
import { ArticleGrid } from "components/molecules";
import useCategoryProductList from "./useCategoryProductList";

type CategoryProductListProps = {
  categoryId: string;
};
const CategoryProductList: React.FC<CategoryProductListProps> = ({ categoryId }: CategoryProductListProps) => {
  const { data, loading, error } = useCategoryProductList(categoryId);

  return (
    <div className="grid grid-rows-[auto_1fr] py-2 px-8">
      {(loading || !data) && <div>Loading...</div>}
      {error && <div>Error Occurred. Please try refreshing the page.</div>}
      {data && (
        <>
          <ArticleListHeader name={data.name} articleCount={data.articleCount} />
          <ArticleGrid products={data.categoryArticles.articles} />
        </>
      )}
    </div>
  );
};

export default CategoryProductList;
