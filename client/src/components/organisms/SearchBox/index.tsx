import { SearchBoxForm } from "components/molecules";
import React from "react";
import useSearchBox from "./useSearchBox";

const SearchBox: React.FC = () => {
  const { handleSearchChange, initialSearchText, handleSearchSubmit, searchSuggestions, showSuggestions } =
    useSearchBox();

  return (
    <SearchBoxForm
      showSuggestions={showSuggestions}
      initialSearchText={initialSearchText}
      onSearchSubmit={handleSearchSubmit}
      onSearchChange={handleSearchChange}
      suggestions={searchSuggestions}
    />
  );
};

export default SearchBox;
