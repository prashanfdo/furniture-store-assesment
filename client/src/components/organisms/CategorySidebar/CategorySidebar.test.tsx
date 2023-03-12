// TODO: clean all below like imports, must import from 'test-utils
import useCategoryListQuery from "queries/useCategoryListQuery";
import { CategoryListQueryData, CategoryListQueryVars } from "queries/useCategoryListQuery/useCategoryListQuery.types";
import { createCategoryList, createGqlResult, render, screen } from "test-utils";
import CategorySidebar from "./index";

jest.mock("react-content-loader", () => () => <div data-testid="loading">Loading</div>);
jest.mock("queries/useCategoryListQuery");
const mockUseCategoryListQuery = useCategoryListQuery as jest.MockedFunction<typeof useCategoryListQuery>;

describe("CategorySidebar", () => {
  it("should render", () => {
    mockUseCategoryListQuery.mockReturnValueOnce(
      createGqlResult<CategoryListQueryData, CategoryListQueryVars>({
        data: {
          categories: [
            {
              name: "Root Category",
              articleCount: 100,
              childrenCategories: {
                list: createCategoryList(10),
              },
            },
          ],
        },
      }),
    );
    const { container } = render(<CategorySidebar />);
    expect(container).toMatchSnapshot();
    expect(mockUseCategoryListQuery).toHaveBeenCalledTimes(1);
  });

  it("should render loading state", () => {
    mockUseCategoryListQuery.mockReturnValueOnce(
      createGqlResult<CategoryListQueryData, CategoryListQueryVars>({
        loading: true,
      }),
    );
    const { container } = render(<CategorySidebar />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("should render error state", () => {
    mockUseCategoryListQuery.mockReturnValueOnce(
      createGqlResult<CategoryListQueryData, CategoryListQueryVars>({
        loading: false,
        error: {
          message: "Test Error",
        } as never,
      }),
    );
    const { container } = render(<CategorySidebar />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Error Occurred")).toBeInTheDocument();
  });
});
