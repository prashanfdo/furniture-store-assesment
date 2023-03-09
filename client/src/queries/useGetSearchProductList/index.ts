import { useQuery } from "@apollo/client";
import GET_PRODUCT_LIST from "./query";
import { GetSearchProductListData, GetSearchProductListVars } from "./useGetSearchProductList.types";
import { DEFAULT_LOCALE } from "helpers/constants";

export default function useGetSearchProductList(searchText: string) {
  return useQuery<GetSearchProductListData, GetSearchProductListVars>(GET_PRODUCT_LIST, {
    variables: { query: searchText, locale: DEFAULT_LOCALE },
  });
}
