// TODO: clean all below like imports, must import from 'test-utils
import { ROOT_CATEGORY_ID } from "helpers/constants";
import useCategoryProductListQuery from "queries/useCategoryProductListQuery";
import {
  CategoryProductListQueryData,
  CategoryProductListQueryVars,
} from "queries/useCategoryProductListQuery/useCategoryProductListQuery.types";
import { createArticleList, createGqlResult, render } from "test-utils";
import CategoryProductList from "./index";

jest.mock("react-content-loader", () => () => <div data-testid="loading">Loading</div>);
jest.mock("queries/useCategoryProductListQuery");
const mockUseCategoryProductListQuery = useCategoryProductListQuery as jest.MockedFunction<
  typeof useCategoryProductListQuery
>;

describe("CategoryProductList", () => {
  it("should render", () => {
    mockUseCategoryProductListQuery.mockReturnValueOnce(
      createGqlResult<CategoryProductListQueryData, CategoryProductListQueryVars>({
        data: {
          categories: [
            {
              name: "Category 1",
              articleCount: 1,
              categoryArticles: {
                articles: createArticleList(10),
              },
            },
          ],
        },
      }),
    );
    const { container } = render(<CategoryProductList categoryId={ROOT_CATEGORY_ID} />);
    expect(container).toMatchSnapshot();
    expect(mockUseCategoryProductListQuery).toHaveBeenCalledTimes(1);
  });

  it("should render loading state", () => {
    mockUseCategoryProductListQuery.mockReturnValueOnce(
      createGqlResult<CategoryProductListQueryData, CategoryProductListQueryVars>({
        loading: true,
      }),
    );
    const { container } = render(<CategoryProductList categoryId={ROOT_CATEGORY_ID} />);
    expect(container).toMatchSnapshot();
    expect(container.innerHTML).toContain("Loading");
  });

  it("should render error state", () => {
    mockUseCategoryProductListQuery.mockReturnValueOnce(
      createGqlResult<CategoryProductListQueryData, CategoryProductListQueryVars>({
        loading: false,
        error: {
          message: "Test Error",
        } as never,
      }),
    );
    const { container } = render(<CategoryProductList categoryId={ROOT_CATEGORY_ID} />);
    expect(container).toMatchSnapshot();
    expect(container.innerHTML).toContain("Error");
  });
});
