import constate from "constate";
import { useQuery, gql } from "@apollo/client";

type GetCategoryListResponse = {
  categories: [
    {
      name: string;
      articleCount: number;
      childrenCategories: {
        list: [
          {
            id: string;
            name: string;
            urlPath: string;
          }
        ];
      };
    }
  ];
};
const GET_CATEGORY_LIST = gql`
  query GetCategoryList($id: String!) {
    categories: productLists(ids: [$id], locale: de_DE) {
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

type CategorySidebarContextProviderProps = {
  selectedCategoryId?: string;
};
export const [CategorySidebarContextProvider, useCategorySidebarContext] = constate(
  ({ selectedCategoryId }: CategorySidebarContextProviderProps) => {
    const { loading, error, data } = useQuery<GetCategoryListResponse>(GET_CATEGORY_LIST, {
      variables: { id: "156126" },
    });
    console.log(111, selectedCategoryId);
    return {
      selectedCategoryId,
      categories: data?.categories?.[0].childrenCategories.list || [],
    };
  }
);
