import styled from "@emotion/styled";
import { Article } from "types";
import ArticleThumb from "components/molecules/article/ArticleThumb";

const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 1rem;
`;

type ProductsGridProps = {
  products: Article[];
};
export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <ContainerDiv>
      {products.map((product) => (
        <ArticleThumb key={product.name} product={product} />
      ))}
    </ContainerDiv>
  );
}
