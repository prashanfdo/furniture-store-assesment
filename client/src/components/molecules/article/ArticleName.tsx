import styled from "@emotion/styled";
import { Article } from "types";

const SpanContainer = styled.span`
  color: #999;
`;

type ArticleNameProps = {
  product: Article;
};
const ArticleName: React.FC<ArticleNameProps> = ({ product }: ArticleNameProps) => {
  return <SpanContainer>{product.name}</SpanContainer>;
};

export default ArticleName;
