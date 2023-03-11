import { gql } from "@apollo/client";

const CATEGORY_LIST_QUERY = gql`
  query GetCategoryList($id: String!, $locale: Locale!) {
    categories: productLists(ids: [$id], locale: $locale) {
      name
      articleCount
      childrenCategories: childrenProductLists {
        list {
          id
          name
          urlPath
        }
      }
    }
  }
`;

export default CATEGORY_LIST_QUERY;
