// TODO: clean all below like imports, must import from 'test-utils
import useSearchProductListQuery from "queries/useSearchProductListQuery";
import {
  SearchProductListQueryData,
  SearchProductListQueryVars,
} from "queries/useSearchProductListQuery/useSearchProductListQuery.types";
import { createArticleList, createGqlResult, render } from "test-utils";
import SearchProductList from "./index";

jest.mock("components/atoms", () => ({
  ArticleListHeader: () => <div data-testid="article-list-header" />,
}));
jest.mock("components/molecules", () => ({
  ArticleGrid: () => <div data-testid="article-grid" />,
}));
jest.mock("queries/useSearchProductListQuery");
const mockUseSearchProductListQuery = useSearchProductListQuery as jest.MockedFunction<
  typeof useSearchProductListQuery
>;

describe("SearchProductList", () => {
  it("should render", () => {
    mockUseSearchProductListQuery.mockReturnValueOnce(
      createGqlResult<SearchProductListQueryData, SearchProductListQueryVars>({
        data: {
          searchData: {
            articles: createArticleList(10),
            total: 10,
          },
        },
      }),
    );
    const { container } = render(<SearchProductList searchText="test" page={1} />);
    expect(container).toMatchSnapshot();
    expect(mockUseSearchProductListQuery).toHaveBeenCalledTimes(1);
  });

  // TODO: add tests for loading and error states
});
