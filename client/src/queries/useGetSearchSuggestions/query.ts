import { gql } from "@apollo/client";

const GET_SEARCH_SUGGESTIONS = gql`
  query GetSearchSuggestions($prefix: String!, $locale: Locale!) {
    searchSuggestions: autoSuggestion(prefix: $prefix, locale: $locale) {
      name
      results
      image(format: WEBP, maxWidth: 32, maxHeight: 32)
    }
  }
`;

export default GET_SEARCH_SUGGESTIONS;
