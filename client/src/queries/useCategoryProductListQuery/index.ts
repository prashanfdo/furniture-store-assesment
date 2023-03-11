import { useQuery } from "@apollo/client";
import CATEGORY_PRODUCT_LIST_QUERY from "./query";
import { CategoryProductListQueryData, CategoryProductListQueryVars } from "./useCategoryProductListQuery.types";
import { DEFAULT_LOCALE } from "helpers/constants";

export default function useSearchProductListQuery(categoryId: string) {
  return useQuery<CategoryProductListQueryData, CategoryProductListQueryVars>(CATEGORY_PRODUCT_LIST_QUERY, {
    variables: { id: categoryId, locale: DEFAULT_LOCALE },
  });
}
