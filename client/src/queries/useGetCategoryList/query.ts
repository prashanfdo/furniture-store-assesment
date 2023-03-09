import { gql } from "@apollo/client";

const GET_CATEGORY_LIST = gql`
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

export default GET_CATEGORY_LIST;
