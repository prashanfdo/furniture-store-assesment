import React from "react";
import { InputWithButton } from "./InputWithButton";
import { SuggestionsList } from "./SuggestionsList";
import useSearchForm from "./useSearchForm";
import styled from "@emotion/styled";

// TODO: Need to implement below style in tailwind
const FormContainer = styled.form`
  & .suggestion-list {
    display: none;
  }
  &:focus-within .suggestion-list {
    display: block;
  }
`;

type SearchInputProps = Parameters<typeof useSearchForm>[0] & React.ComponentProps<typeof SuggestionsList>;

const SearchInput: React.FC<SearchInputProps> = ({
  initialSearchText,
  onSearchSubmit,
  onSearchChange,
  suggestions,
  setShowSuggestions,
  showSuggestions,
}: SearchInputProps) => {
  const searchForm = useSearchForm({
    initialSearchText,
    onSearchSubmit,
    onSearchChange,
    setShowSuggestions,
  });

  return (
    <>
      <FormContainer
        className="w-full md:w-[16rem] lg:w-[32rem] relative grid grid-cols-[1fr_auto] border-gray-200 border rounded-lg"
        onSubmit={searchForm.onSubmit}
      >
        <InputWithButton register={searchForm.register} />
        <SuggestionsList suggestions={suggestions} showSuggestions={showSuggestions} />
      </FormContainer>
    </>
  );
};

export default SearchInput;
