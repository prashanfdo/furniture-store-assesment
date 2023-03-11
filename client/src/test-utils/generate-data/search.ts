import { faker } from "@faker-js/faker";

export const createSearchSuggestion = () => {
  return {
    name: faker.commerce.department(),
    results: faker.datatype.number({ min: 100, max: 2000 }),
    image: faker.image.imageUrl(400, 400, "furniture"),
  };
};

export const createSearchSuggestionList = (count: number) => {
  return Array(count)
    .fill(0)
    .map(() => createSearchSuggestion());
};
