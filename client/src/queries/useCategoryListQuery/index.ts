import { useQuery } from "@apollo/client";
import { DEFAULT_LOCALE, ROOT_CATEGORY_ID } from "helpers/constants";
import CATEGORY_LIST_QUERY from "./query";
import { CategoryListQueryData, CategoryListQueryVars } from "./useCategoryListQuery.types";

export default function useCategoryListQuery() {
  return useQuery<CategoryListQueryData, CategoryListQueryVars>(CATEGORY_LIST_QUERY, {
    variables: { id: ROOT_CATEGORY_ID, locale: DEFAULT_LOCALE },
  });
}
