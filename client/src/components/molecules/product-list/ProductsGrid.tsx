import ArticleThumb from "components/molecules/article/ArticleThumb";
import { Article } from "types";

type ProductsGridProps = {
  products: Article[];
};
export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-4">
      {products.map((product) => (
        <ArticleThumb key={product.name} product={product} />
      ))}
    </div>
  );
}
