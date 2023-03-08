import constate from "constate";
import { useQuery, gql } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

type GetSearchSuggestionsResponse = {
  searchSuggestions: {
    name: string;
    results: number;
    image: string;
  }[];
};
const GET_SEARCH_SUGGESTIONS = gql`
  query GetSearchSuggestions($prefix: String!) {
    searchSuggestions: autoSuggestion(prefix: $prefix, locale: de_DE) {
      name
      results
      image(format: WEBP, maxWidth: 32, maxHeight: 32)
    }
  }
`;

const [SearchBarContextProvider, useSearchBarContext] = constate(() => {
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const initialSearchText = searchParams.get("q") || "";

  const [searchText, setSearchText] = useState<string>("");

  const handleSearchSubmit = (searchText: string) => {
    setShowSuggestions(false);
    if (!!searchText?.trim()) {
      setSearchParams({ q: searchText?.trim() });
    } else {
      setSearchParams({});
    }
  };

  const handleSearchChange = (newText: string) => {
    if (newText !== searchText) {
      setShowSuggestions(true);
    }
    setSearchText(newText);
  };

  const { loading, error, data } = useQuery<GetSearchSuggestionsResponse>(GET_SEARCH_SUGGESTIONS, {
    variables: { prefix: searchText },
  });

  const searchSuggestions = data?.searchSuggestions || [];

  return {
    initialSearchText,
    handleSearchChange,
    handleSearchSubmit,
    searchSuggestions,
    showSuggestions,
    setShowSuggestions,
  };
});

export { SearchBarContextProvider, useSearchBarContext };
