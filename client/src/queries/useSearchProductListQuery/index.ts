import { useQuery } from "@apollo/client";
import SEARCH_PRODUCT_LIST_QUERY from "./query";
import { SearchProductListQueryData, SearchProductListQueryVars } from "./useSearchProductListQuery.types";
import { DEFAULT_LOCALE } from "helpers/constants";

export default function useSearchProductListQuery(searchText: string) {
  return useQuery<SearchProductListQueryData, SearchProductListQueryVars>(SEARCH_PRODUCT_LIST_QUERY, {
    variables: { query: searchText, locale: DEFAULT_LOCALE },
  });
}
