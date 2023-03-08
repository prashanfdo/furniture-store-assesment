import constate from "constate";
import { useQuery, gql } from "@apollo/client";
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
          }
        ];
      };
      categoryArticles: {
        articles: [
          {
            name: string;
            variantName: string;
            prices: {
              currency: string;
              regular: {
                value: number;
              };
            };
            images: {
              path: string;
            }[];
          }
        ];
      };
    }
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
          prices {
            currency
            regular {
              value
            }
          }
          images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 4) {
            path
          }
        }
      }
    }
  }
`;

type ProductListContextProviderProps = {
  searchText: string;
  page: number;
};
const [ProductListContextProvider, useProductListContext] = constate(
  ({ searchText }: ProductListContextProviderProps) => {
    const { loading, error, data } = useQuery<GetProductListResponse>(GET_PRODUCT_LIST, {
      variables: { id: "156126" },
    });
    console.log(data?.categories);
    return {
      loading,
      error,
      data: data?.categories?.[0],
    };
  }
);

export { ProductListContextProvider, useProductListContext };
