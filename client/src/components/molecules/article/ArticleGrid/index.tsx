import { Article } from "types";
import { ArticleThumb } from "components/molecules";
import Loading from "./Loading";

type ArticleGridProps = Pick<React.ComponentProps<typeof ArticleThumb>, "onAddtoCart"> & {
  products: Article[];
  loading: boolean;
};
export default function ArticleGrid({ loading, products, onAddtoCart }: ArticleGridProps) {
  return (
    <div data-testid="product-grid" className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-4">
      {loading && <Loading />}
      {/* using index as key since api doesn't returns an id and names are not unique to be used as key */}
      {products.map((product, index) => (
        <ArticleThumb key={index} product={product} onAddtoCart={onAddtoCart} />
      ))}
    </div>
  );
}
