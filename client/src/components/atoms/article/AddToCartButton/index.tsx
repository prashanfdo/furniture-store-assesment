import { ButtonHTMLAttributes } from "react";

type AddToCartButtonProps = Pick<
  React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
>;
const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }: AddToCartButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="block w-full p-2 mt-2 text-center text-gray-600 bg-white border border-solid rounded cursor-pointer border-coral-200 hover:border-coral-600 hover:bg-coral-600 hover:text-white"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
