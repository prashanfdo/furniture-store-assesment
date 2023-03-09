import { useQuery } from "@apollo/client";
import GET_SEARCH_SUGGESTIONS from "./query";
import { GetSearchSuggestionsData, GetSearchSuggestionsVars } from "./useGetSearchSuggestions.types";
import { DEFAULT_LOCALE } from "helpers/constants";

export default function useGetSearchSuggestions(searchText: string) {
  return useQuery<GetSearchSuggestionsData, GetSearchSuggestionsVars>(GET_SEARCH_SUGGESTIONS, {
    variables: { prefix: searchText, locale: DEFAULT_LOCALE },
  });
}
