import constate from "constate";
import { useQuery, gql } from "@apollo/client";
import { Article } from "types";
type GetSearchProductListResponse = {
  searchData: {
    total: number;
    articles: Article[];
  };
};
const GET_PRODUCT_LIST = gql`
  query GetSearchProductList($query: String!, $locale: Locale!) {
    searchData: search(locale: $locale, query: $query) {
      ... on SearchResultArticles {
        total
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

type SearchProductListContextProviderProps = {
  searchText: string;
  page: number;
};
const [SearchProductListContextProvider, useSearchProductListContext] = constate(
  ({ searchText, page }: SearchProductListContextProviderProps) => {
    const { loading, error, data } = useQuery<GetSearchProductListResponse>(GET_PRODUCT_LIST, {
      variables: { query: searchText, locale: "de_DE" },
    });
    console.log(data?.searchData);
    return {
      searchText,
      page,
      loading,
      error,
      data: data?.searchData,
    };
  }
);

export { SearchProductListContextProvider, useSearchProductListContext };
