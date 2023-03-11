export type SearchSuggestionsQueryData = {
  searchSuggestions: {
    name: string;
    results: number;
    image: string;
  }[];
};

export type SearchSuggestionsQueryVars = {
  prefix: string;
  locale: string;
};
