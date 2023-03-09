import constate from "constate";
import { useQuery, gql } from "@apollo/client";
import { Article } from "types";
type GetProductListResponse = {
  categories: [
    {
      name: string;
      articleCount: number;
      childrenCategories: {
        list: [
          {
            name: string;
            urlPath: string;
          },
        ];
      };
      categoryArticles: {
        articles: Article[];
      };
    },
  ];
};
const GET_PRODUCT_LIST = gql`
  query GetProductList($id: String!) {
    categories: productLists(ids: [$id], locale: de_DE) {
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

type ProductListContextProviderProps = {
  categoryId: string;
};
const [ProductListContextProvider, useProductListContext] = constate(
  ({ categoryId }: ProductListContextProviderProps) => {
    const { loading, error, data } = useQuery<GetProductListResponse>(GET_PRODUCT_LIST, {
      variables: { id: categoryId },
    });
    return {
      loading,
      error,
      data: data?.categories?.[0],
    };
  },
);

export { ProductListContextProvider, useProductListContext };
