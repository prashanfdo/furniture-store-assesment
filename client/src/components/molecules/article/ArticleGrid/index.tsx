import { Article } from "types";
import { ArticleThumb } from "components/molecules";

type ArticleGridProps = Pick<React.ComponentProps<typeof ArticleThumb>, "onAddtoCart"> & {
  products: Article[];
};
export default function ArticleGrid({ products, onAddtoCart }: ArticleGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-4">
      {products.map((product) => (
        <ArticleThumb key={product.name} product={product} onAddtoCart={onAddtoCart} />
      ))}
    </div>
  );
}
