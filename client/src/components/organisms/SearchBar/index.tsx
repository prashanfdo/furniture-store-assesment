import SearchInput from "components/molecules/search-input/SearchInput";
import wrapContext from "helpers/wrapContext";
import React from "react";
import { SearchBarContextProvider, useSearchBarContext } from "./SearchBarContext";

const SearchBar: React.FC = () => {
  const {
    handleSearchChange,
    initialSearchText,
    handleSearchSubmit,
    searchSuggestions,
    setShowSuggestions,
    showSuggestions,
  } = useSearchBarContext();

  return (
    <SearchInput
      showSuggestions={showSuggestions}
      initialSearchText={initialSearchText}
      onSearchSubmit={handleSearchSubmit}
      onSearchChange={handleSearchChange}
      suggestions={searchSuggestions}
      setShowSuggestions={setShowSuggestions}
    />
  );
};

export default wrapContext(SearchBarContextProvider, SearchBar);
