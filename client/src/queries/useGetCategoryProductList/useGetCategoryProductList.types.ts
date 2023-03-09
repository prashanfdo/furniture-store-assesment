import { Article } from "types";

export type GetCategoryProductListData = {
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
export type GetCategoryProductListVars = {
  id: string;
  locale: string;
};
