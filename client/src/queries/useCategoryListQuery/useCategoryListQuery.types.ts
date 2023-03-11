export type CategoryListQueryData = {
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

export type CategoryListQueryVars = {
  id: string;
  locale: string;
};
