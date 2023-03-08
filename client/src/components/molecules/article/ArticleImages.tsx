import styled from "@emotion/styled";
import { Article } from "types";
// import ImageSlider from "./ImageSlider";

const DivContainer = styled.div`
  display: block;
`;
const Img = styled.img`
  object-fit: contain;
  height: 260px;
  width: 100%;
`;

type ArticleImagesProps = {
  productImages: Article["images"];
};
const ArticleImages: React.FC<ArticleImagesProps> = ({ productImages }: ArticleImagesProps) => {
  const image = productImages[0];
  return (
    <DivContainer>
      <Img key={image.path} src={image.path} alt={image.path} />
      {/* {productImages?.length > 0 ? <ImageSlider productImages={productImages} /> : null} */}
    </DivContainer>
  );
};

export default ArticleImages;
