import { Article } from "types";

export type SearchProductListQueryData = {
  searchData: {
    total: number;
    articles: Article[];
  };
};

export type SearchProductListQueryVars = {
  query: string;
  locale: string;
};
