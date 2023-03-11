import { Article } from "types";

export type CategoryProductListQueryData = {
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

export type CategoryProductListQueryVars = {
  id: string;
  locale: string;
};
