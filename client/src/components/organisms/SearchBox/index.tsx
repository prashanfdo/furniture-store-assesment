import wrapContext from "helpers/wrapContext";
import React from "react";
import SearchBoxProvider, { useSearchBoxContext } from "./SearchBoxProvider";
import { SearchBoxForm } from "components/molecules";

const SearchBox: React.FC = () => {
  const { handleSearchChange, initialSearchText, handleSearchSubmit, searchSuggestions, showSuggestions } =
    useSearchBoxContext();

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

export default wrapContext(SearchBoxProvider, SearchBox);
