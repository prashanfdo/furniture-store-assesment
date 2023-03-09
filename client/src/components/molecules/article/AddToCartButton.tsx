import { Article } from "types";

type AddToCartButtonProps = {
  product: Article;
};
const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }: AddToCartButtonProps) => {
  return (
    <button className="text-center border-solid border-gray-200 border block w-full p-2 rounded mt-2 cursor-pointer bg-white text-gray-600 hover:bg-[#7047eb] hover:text-white transition-all duration-100">
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
