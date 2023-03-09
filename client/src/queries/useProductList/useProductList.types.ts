export type ProductListData = {
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
          },
        ];
      };
    },
  ];
};
