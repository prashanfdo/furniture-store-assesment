import { useQuery } from "@apollo/client";
import SEARCH_SUGGESTIONS_QUERY from "./query";
import { SearchSuggestionsQueryData, SearchSuggestionsQueryVars } from "./useSearchSuggestionsQuery.types";
import { DEFAULT_LOCALE } from "helpers/constants";

export default function useSearchSuggestionsQuery(searchText: string) {
  return useQuery<SearchSuggestionsQueryData, SearchSuggestionsQueryVars>(SEARCH_SUGGESTIONS_QUERY, {
    variables: { prefix: searchText, locale: DEFAULT_LOCALE },
  });
}
