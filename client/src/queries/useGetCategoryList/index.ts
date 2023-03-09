import { useQuery } from "@apollo/client";
import { DEFAULT_LOCALE, ROOT_CATEGORY_ID } from "helpers/constants";
import GET_CATEGORY_LIST from "./query";
import { GetCategoryListData, GetCategoryListVars } from "./useGetCategoryList.types";

export default function useGetCategoryList() {
  return useQuery<GetCategoryListData, GetCategoryListVars>(GET_CATEGORY_LIST, {
    variables: { id: ROOT_CATEGORY_ID, locale: DEFAULT_LOCALE },
  });
}
