import { render, screen } from "test-utils";
import SearchPage from "./index";
import SearchProductList from "components/organisms/SearchProductList";
import { useSearchParams } from "react-router-dom";

jest.mock(
  "components/organisms/SearchProductList",
  () =>
    ({ searchText, page }: React.ComponentProps<typeof SearchProductList>) =>
      <div data-testid="search-product-list" data-search-text={searchText} data-page={page} />,
);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: jest.fn(),
}));
const mockUseSearchParams = useSearchParams as jest.MockedFunction<typeof useSearchParams>;

describe("SearchPage", () => {
  it("should render", () => {
    mockUseSearchParams.mockReturnValue([new URLSearchParams("q=test"), jest.fn()]);
    const { container } = render(<SearchPage />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("search-product-list")).toHaveAttribute("data-search-text", "test");
    expect(screen.getByTestId("search-product-list")).toHaveAttribute("data-page", "1");
  });

  it("should render when no search text", () => {
    mockUseSearchParams.mockReturnValue([new URLSearchParams(""), jest.fn()]);
    const { container } = render(<SearchPage />);
    expect(container).toMatchSnapshot();
    expect(screen.queryByTestId("search-product-list")).not.toBeInTheDocument();
  });
});
