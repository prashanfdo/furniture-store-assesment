import constate from "constate";
import useSearchSuggestionsQuery from "queries/useSearchSuggestionsQuery";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// TODO: add comments
const [SearchBoxProvider, useSearchBoxContext] = constate(() => {
  const navigate = useNavigate();
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const initialSearchText = searchParams.get("q") || "";
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchSubmit = (searchText: string) => {
    setShowSuggestions(false);
    if (!!searchText?.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchText?.trim())}`);
    } else {
      navigate(`/`);
    }
  };

  const handleSearchChange = (newText: string) => {
    if (newText !== searchText) {
      setShowSuggestions(true);
    }
    setSearchText(newText);
  };

  // TODO: handle loading and error states
  const { data } = useSearchSuggestionsQuery(searchText);

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

export { useSearchBoxContext };
export default SearchBoxProvider;
