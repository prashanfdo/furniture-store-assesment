import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { InputWithButton } from "./InputWithButton";
import { SuggestionsList } from "./SuggestionsList";
import useSearchForm from "./useSearchForm";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 500px;
  position: relative;
`;

type SearchInputProps = Parameters<typeof useSearchForm>[0] &
  React.ComponentProps<typeof SuggestionsList>;

const SearchInput: React.FC<SearchInputProps> = ({
  initialSearchText,
  onSearchSubmit,
  onSearchChange,
  suggestions,
}: SearchInputProps) => {
  const searchForm = useSearchForm({ initialSearchText, onSearchSubmit, onSearchChange });

  return (
    <>
      <FormContainer onSubmit={searchForm.onSubmit}>
        <InputWithButton register={searchForm.register} />
        <SuggestionsList suggestions={suggestions} />
      </FormContainer>
    </>
  );
};

export default SearchInput;
