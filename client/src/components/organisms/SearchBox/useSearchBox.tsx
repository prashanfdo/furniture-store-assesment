import useSearchSuggestionsQuery from "queries/useSearchSuggestionsQuery";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// TODO: add comments
const useSearchBox = () => {
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
  const { data, loading, error } = useSearchSuggestionsQuery(searchText);

  const searchSuggestions = data?.searchSuggestions || [];

  return {
    loading,
    error,
    initialSearchText,
    handleSearchChange,
    handleSearchSubmit,
    searchSuggestions,
    showSuggestions,
    setShowSuggestions,
  };
};

export default useSearchBox;
