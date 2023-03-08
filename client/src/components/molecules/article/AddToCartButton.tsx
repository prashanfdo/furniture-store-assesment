import styled from "@emotion/styled";
import { Article } from "types";

const ButtonContainer = styled.button`
  text-align: center;
  border: solid 1px #eee;
  display: block;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
  cursor: pointer;
  background-color: #fff;
  color: #666;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #7047eb;
    color: #fff;
  }
`;

type AddToCartButtonProps = {
  product: Article;
};
const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }: AddToCartButtonProps) => {
  return <ButtonContainer>Add To Cart</ButtonContainer>;
};

export default AddToCartButton;
