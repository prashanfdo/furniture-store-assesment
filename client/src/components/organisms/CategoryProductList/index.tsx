import { ArticleListHeader } from "components/atoms";
import { ArticleGrid, SEO } from "components/molecules";
import useCategoryProductList from "./useCategoryProductList";

type CategoryProductListProps = {
  categoryId: string;
};
const CategoryProductList: React.FC<CategoryProductListProps> = ({ categoryId }: CategoryProductListProps) => {
  const { data, loading, error } = useCategoryProductList(categoryId);

  return (
    <>
      <div className="max-w-[100rem] mx-auto grid grid-rows-[auto_1fr] py-2 px-8">
        {error && <div>Error Occurred. Please try refreshing the page.</div>}
        {(data || loading) && (
          <>
            <SEO
              title={`${data?.name} Category`}
              description={`Category with ${data?.articleCount} products`}
              name={data?.name || "Category"}
              type="products"
            />
            <ArticleListHeader name={data?.name} articleCount={data?.articleCount} loading={loading} />
            <ArticleGrid products={data?.categoryArticles.articles || []} loading={loading} />
          </>
        )}
      </div>
    </>
  );
};

export default CategoryProductList;
