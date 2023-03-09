import { Article } from "types";

export type GetSearchProductListData = {
  searchData: {
    total: number;
    articles: Article[];
  };
};

export type GetSearchProductListVars = {
  query: string;
  locale: string;
};
