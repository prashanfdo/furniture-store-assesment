import styled from "@emotion/styled";
import React, { useEffect } from "react";
import SearchInput from "components/molecules/search-input/SearchInput";
import { useSearchParams } from "react-router-dom";

const DivContainer = styled.div`
  width: 500px;
  position: relative;
`;

const SearchBar: React.FC = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("q") || "";

  const handleSearchSubmit = (searchText: string) => {
    if (!!searchText?.trim()) {
      setSearchParams({ q: searchText?.trim() });
    } else {
      setSearchParams({});
    }
  };
  const handleSearchChange = (searchText: string) => {
    console.log("Search changed: ", searchText);
  };

  return (
    <DivContainer>
      <SearchInput
        initialSearchText={searchText}
        onSearchSubmit={handleSearchSubmit}
        onSearchChange={handleSearchChange}
        suggestions={[]}
      />
    </DivContainer>
  );
};

export default SearchBar;
