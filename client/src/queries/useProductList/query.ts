import { gql } from "@apollo/client";

const GET_PRODUCT_LIST = gql`
  query GetCart($id: String!) {
    categories: carts(ids: [$id], locale: de_DE) {
      name
      articleCount
      childrenCategories: childrenCarts {
        list {
          name
          urlPath
        }
      }
      categoryArticles: articlesList(first: 50) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(format: WEBP, maxWidth: 400, maxHeight: 400, limit: 4) {
            path
          }
        }
      }
    }
  }
`;

export default GET_PRODUCT_LIST;
