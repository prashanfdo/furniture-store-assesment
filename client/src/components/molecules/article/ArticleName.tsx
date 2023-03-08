import styled from "@emotion/styled";
import { Article } from "types";

const DivContainer = styled.div`
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

type ArticleNameProps = {
  product: Article;
};
const ArticleName: React.FC<ArticleNameProps> = ({ product }: ArticleNameProps) => {
  return <DivContainer>{product.name}</DivContainer>;
};

export default ArticleName;
