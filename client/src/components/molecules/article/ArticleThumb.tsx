import { Link } from "react-router-dom";
import { Article } from "types";
import AddToCartButton from "./AddToCartButton";
import ArticleImages from "./ArticleImages";
import ArticleName from "./ArticleName";
import ArticlePrice from "./ArticlePrice";

type ArticleThumbProps = {
  product: Article;
};
const ArticleThumb: React.FC<ArticleThumbProps> = ({ product }: ArticleThumbProps) => {
  return (
    <Link
      className="block border-none rounded-md bg-white overflow-hidden decoration-transparent p-4"
      to="#product-page">
      <ArticleImages productImages={product.images} />
      <ArticleName product={product} />
      <ArticlePrice
        currency={product.prices.currency}
        price={product.prices.regular.value}
        salePrice={product.prices.special?.value}
        discount={product.prices.special?.discount}
      />
      <AddToCartButton product={product} />
    </Link>
  );
};

export default ArticleThumb;
