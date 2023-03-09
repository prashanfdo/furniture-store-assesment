import { gql } from "@apollo/client";

const GET_SEARCH_PRODUCT_LIST = gql`
  query GetSearchProductList($query: String!, $locale: Locale!) {
    searchData: search(locale: $locale, query: $query) {
      ... on SearchResultArticles {
        total
        articles {
          name
          variantName
          images(format: WEBP, maxWidth: 400, maxHeight: 400, limit: 4) {
            path
            type
          }
          prices {
            currency
            regular {
              value
            }
            special {
              value
              discount
            }
          }
        }
      }
    }
  }
`;

export default GET_SEARCH_PRODUCT_LIST;
