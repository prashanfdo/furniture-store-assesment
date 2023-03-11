import { gql } from "@apollo/client";

const SEARCH_SUGGESTIONS_QUERY = gql`
  query GetSearchSuggestions($prefix: String!, $locale: Locale!) {
    searchSuggestions: autoSuggestion(prefix: $prefix, locale: $locale) {
      name
      results
      image(format: WEBP, maxWidth: 32, maxHeight: 32)
    }
  }
`;

export default SEARCH_SUGGESTIONS_QUERY;
