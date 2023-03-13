import React from "react";
import { SearchInput, SuggestionsList } from "components/atoms";
import useSearchForm from "./useSearchForm";

type SearchBoxFormProps = Parameters<typeof useSearchForm>[0] & React.ComponentProps<typeof SuggestionsList>;

const SearchBoxForm: React.FC<SearchBoxFormProps> = ({
  initialSearchText,
  onSearchSubmit,
  onSearchChange,
  suggestions,
  showSuggestions,
}: SearchBoxFormProps) => {
  const searchForm = useSearchForm({
    initialSearchText,
    onSearchSubmit,
    onSearchChange,
  });

  return (
    <>
      <form
        className="search-input-form w-full md:w-[16rem] lg:w-[32rem] relative grid grid-cols-[1fr_auto] border-gray-200 border rounded-lg group"
        onSubmit={searchForm.onSubmit}
      >
        <SearchInput {...searchForm.register("search")} />
        <SuggestionsList suggestions={suggestions} showSuggestions={showSuggestions} />
      </form>
    </>
  );
};

export default SearchBoxForm;
