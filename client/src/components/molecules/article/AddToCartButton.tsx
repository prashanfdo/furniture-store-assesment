import styled from "@emotion/styled";
import { Article } from "types";

const ButtonContainer = styled.button`
  text-align: center;
`;

type AddToCartButtonProps = {
  product: Article;
};
const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }: AddToCartButtonProps) => {
  return <ButtonContainer>Add To Cart</ButtonContainer>;
};

export default AddToCartButton;
