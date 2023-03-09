export type GetCategoryListData = {
  categories: [
    {
      name: string;
      articleCount: number;
      childrenCategories: {
        list: [
          {
            id: string;
            name: string;
            urlPath: string;
          },
        ];
      };
    },
  ];
};

export type GetCategoryListVars = {
  id: string;
  locale: string;
};
