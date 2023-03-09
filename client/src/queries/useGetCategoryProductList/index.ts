import { useQuery } from "@apollo/client";
import GET_CATEGORY_PRODUCT_LIST from "./query";
import { GetCategoryProductListData, GetCategoryProductListVars } from "./useGetCategoryProductList.types";
import { DEFAULT_LOCALE } from "helpers/constants";

export default function useGetSearchProductList(categoryId: string) {
  return useQuery<GetCategoryProductListData, GetCategoryProductListVars>(GET_CATEGORY_PRODUCT_LIST, {
    variables: { id: categoryId, locale: DEFAULT_LOCALE },
  });
}
