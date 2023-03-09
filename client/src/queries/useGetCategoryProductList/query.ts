import { gql } from "@apollo/client";

const GET_CATEGORY_PRODUCT_LIST = gql`
  query GetCategoryProductList($id: String!, $locale: Locale!) {
    categories: productLists(ids: [$id], locale: $locale) {
      name
      articleCount
      childrenCategories: childrenProductLists {
        list {
          name
          urlPath
        }
      }
      categoryArticles: articlesList(first: 50) {
        articles {
          name
          variantName
          images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 4) {
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

export default GET_CATEGORY_PRODUCT_LIST;
