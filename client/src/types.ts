export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory;
};

export type Article = {
  name: string;
  variantName: string;
  images: {
    path: string;
    type: string;
  }[];
  prices: {
    currency: string;
    regular: {
      value: number;
    };
    special: {
      value: number;
      discount: number;
    };
  };
};

export type ChildCategory = {
  list: Array<{
    id: string;
    name: string;
    urlPath: string;
  }>;
};

export type Prices = {
  currency: string;
  regular: {
    value: number;
  };
};

export type Image = {
  path: string;
};

export type CategoryArticle = {
  articles: Article[];
};
