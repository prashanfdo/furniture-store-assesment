import { Article } from "types";

export type CategoryProductListQueryData = {
  categories: [
    {
      name: string;
      articleCount: number;
      categoryArticles: {
        articles: Article[];
      };
    },
  ];
};

export type CategoryProductListQueryVars = {
  id: string;
  locale: string;
};
