export type GetSearchSuggestionsData = {
  searchSuggestions: {
    name: string;
    results: number;
    image: string;
  }[];
};

export type GetSearchSuggestionsVars = {
  prefix: string;
  locale: string;
};
