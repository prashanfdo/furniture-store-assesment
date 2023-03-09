import constate from "constate";
import { ROOT_CATEGORY_ID } from "helpers/constants";
import useProductList from "queries/useProductList";

// TODO - implement a cart feature
const [CartContextProvider, useCartContext] = constate(() => {
  const { loading, error, data } = useProductList(ROOT_CATEGORY_ID);
  return {
    loading,
    error,
    data: data?.categories?.[0],
  };
});

export { useCartContext };

export default CartContextProvider;
