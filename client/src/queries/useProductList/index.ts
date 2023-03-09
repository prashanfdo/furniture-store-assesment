import { useQuery } from "@apollo/client";
import GET_PRODUCT_LIST from "./query";
import { ProductListData } from "./useProductList.types";

export default function useProductList(id: string) {
  return useQuery<ProductListData>(GET_PRODUCT_LIST, {
    variables: { id },
  });
}
