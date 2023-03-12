import { render, screen } from "test-utils";
import CategoryPage from "./index";
import CategoryProductList from "components/organisms/CategoryProductList";

jest.mock(
  "components/organisms/CategoryProductList",
  () =>
    ({ categoryId }: React.ComponentProps<typeof CategoryProductList>) =>
      <div data-testid="category-product-list" data-category-id={categoryId} />,
);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useMatches: () => [{ params: { category: "test" } }],
}));

describe("CategoryPage", () => {
  it("should render", () => {
    const { container } = render(<CategoryPage />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("category-product-list")).toHaveAttribute("data-category-id", "test");
  });

  // TODO: add more tests
});
