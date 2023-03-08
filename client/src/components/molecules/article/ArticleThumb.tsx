import styled from "@emotion/styled";
import { Article } from "types";
import AddToCartButton from "./AddToCartButton";
import ArticleName from "./ArticleName";
import ArticleImages from "./ArticleImages";

const LinkContainer = styled.a`
  display: block;
  border: 0;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  text-decoration: none;
  padding: 0.5rem;
`;

type ArticleThumbProps = {
  product: Article;
};
const ArticleThumb: React.FC<ArticleThumbProps> = ({ product }: ArticleThumbProps) => {
  return (
    <LinkContainer href="#product-page">
      <ArticleImages productImages={product.images} />
      <ArticleName product={product} />
      <AddToCartButton product={product} />
    </LinkContainer>
  );
};

export default ArticleThumb;
