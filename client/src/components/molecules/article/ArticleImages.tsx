import styled from "@emotion/styled";
import { Article } from "types";

const DivContainer = styled.div`
  display: grid;
`;

type ArticleImagesProps = {
  productImages: Article["images"];
};
const ArticleImages: React.FC<ArticleImagesProps> = ({ productImages }: ArticleImagesProps) => {
  return (
    <DivContainer>
      {productImages.map((image) => {
        return <img key={image.path} src={image.path} alt={image.path} />;
      })}
    </DivContainer>
  );
};

export default ArticleImages;
