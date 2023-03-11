import { faker } from "@faker-js/faker";
import { Article } from "types";

export const createArticleImages = (): Pick<Article, "images"> => {
  return {
    images: Array(4)
      .fill(0)
      .map(() => ({
        path: faker.image.imageUrl(),
        type: "WEBP",
      })),
  };
};
export const createArticlePrice = (includeDiscount: boolean): Pick<Article, "prices"> => {
  const regularPrice = faker.datatype.number({ min: 1000, max: 5000 });
  const discount = includeDiscount ? faker.datatype.number({ min: 100, max: 1000 }) : 0;
  return {
    prices: {
      currency: "EUR",
      regular: {
        value: regularPrice,
      },
      special: !includeDiscount
        ? undefined
        : {
            value: regularPrice - discount,
            discount: discount,
          },
    },
  };
};

export const createArticle = (includeDiscount: boolean): Article => {
  return {
    name: faker.commerce.productName(),
    variantName: faker.commerce.productMaterial(),
    ...createArticleImages(),
    ...createArticlePrice(includeDiscount),
  };
};

export const createArticleList = (count: number): Article[] => {
  return Array(count)
    .fill(0)
    .map(() => createArticle(faker.datatype.boolean()));
};
