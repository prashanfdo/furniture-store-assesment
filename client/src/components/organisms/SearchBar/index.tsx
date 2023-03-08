import styled from "@emotion/styled";
import React, { useEffect } from "react";
import SearchInput from "components/molecules/search-input/SearchInput";
import { useSearchParams } from "react-router-dom";
import wrapContext from "helpers/wrapContext";
import { SearchBarContextProvider, useSearchBarContext } from "./SearchBarContext";

const DivContainer = styled.div`
  width: 500px;
  position: relative;
`;

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
    <DivContainer>
      <SearchInput
        showSuggestions={showSuggestions}
        initialSearchText={initialSearchText}
        onSearchSubmit={handleSearchSubmit}
        onSearchChange={handleSearchChange}
        suggestions={searchSuggestions}
        setShowSuggestions={setShowSuggestions}
      />
    </DivContainer>
  );
};

export default wrapContext(SearchBarContextProvider, SearchBar);
