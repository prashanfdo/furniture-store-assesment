import constate from "constate";
import { useQuery, gql } from "@apollo/client";
import { ROOT_CATEGORY_ID } from "helpers/constants";

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
          },
        ];
      };
    },
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
    // TODO handle loading and error states
    const { data } = useQuery<GetCategoryListResponse>(GET_CATEGORY_LIST, {
      variables: { id: ROOT_CATEGORY_ID },
    });
    return {
      selectedCategoryId,
      categories: data?.categories?.[0].childrenCategories.list || [],
    };
  },
);
