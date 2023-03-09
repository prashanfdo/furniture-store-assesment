import constate from "constate";
import { useQuery, gql } from "@apollo/client";
type GetCartResponse = {
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
const [CartContextProvider, useCartContext] = constate(() => {
  const { loading, error, data } = useQuery<GetCartResponse>(GET_PRODUCT_LIST, {
    variables: { id: "156126" },
  });
  return {
    loading,
    error,
    data: data?.categories?.[0],
  };
});

export { CartContextProvider, useCartContext };
