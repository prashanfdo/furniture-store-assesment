import { Link } from "react-router-dom";
import { Article } from "types";
import { AddToCartButton, ArticleImage, ArticleName, ArticlePrice } from "components/atoms";

type ArticleThumbProps = {
  product: Article;
  // TODO: make this required once add to cart feature implemented
  onAddtoCart?: (product: Article) => void;
};
const ArticleThumb: React.FC<ArticleThumbProps> = ({ product, onAddtoCart }: ArticleThumbProps) => {
  const handleAddToCartButtonClick = () => {
    onAddtoCart?.(product);
  };

  return (
    <Link
      className="block p-4 overflow-hidden bg-white border-none rounded-md decoration-transparent"
      to="#product-page"
    >
      <ArticleImage src={product.images[0].path} alt={product.name} />
      <ArticleName>{product.name}</ArticleName>
      <ArticlePrice
        currency={product.prices.currency}
        price={product.prices.regular.value}
        salePrice={product.prices.special?.value}
        discount={product.prices.special?.discount}
      />
      <AddToCartButton onClick={handleAddToCartButtonClick} />
    </Link>
  );
};

export default ArticleThumb;
