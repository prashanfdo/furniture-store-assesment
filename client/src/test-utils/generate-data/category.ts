import { faker } from "@faker-js/faker";
import { ChildCategory } from "types";

export const createCategory = (): ChildCategory["list"][0] => {
  return {
    id: faker.datatype.number({ min: 1 }).toString(),
    name: faker.commerce.department(),
    urlPath: faker.commerce.department(),
  };
};

export const createCategoryList = (count: number): ChildCategory["list"][0][] => {
  return Array(count)
    .fill(0)
    .map(() => createCategory());
};
