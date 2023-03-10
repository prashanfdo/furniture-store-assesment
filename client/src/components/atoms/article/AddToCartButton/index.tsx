import { ButtonHTMLAttributes } from "react";

type AddToCartButtonProps = Pick<
  React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
>;
const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }: AddToCartButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-center border-solid border-gray-200 border block w-full p-2 rounded mt-2 cursor-pointer bg-white text-gray-600 hover:bg-[#7047eb] hover:text-white transition-all duration-100"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
