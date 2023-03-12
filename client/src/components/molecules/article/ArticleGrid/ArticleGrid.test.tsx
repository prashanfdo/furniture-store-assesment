import { createArticleList, render, screen, user } from "test-utils";
import ArticleGrid from "./index";

jest.mock("react-content-loader", () => () => <div data-testid="loading">Loading</div>);

const dataProducts: React.ComponentProps<typeof ArticleGrid>["products"] = createArticleList(10);

describe("ArticleGrid", () => {
  beforeEach(() => {
    user.setup();
  });

  it("should render", () => {
    const handleAddToCart = jest.fn();
    const { container } = render(<ArticleGrid products={dataProducts} onAddtoCart={handleAddToCart} loading={false} />);
    expect(container).toMatchSnapshot();
    const productGrid = screen.getByTestId("product-grid");
    expect(productGrid).toBeInTheDocument();
    expect(productGrid.childNodes).toHaveLength(dataProducts.length);
  });

  it("should invoke onAddtoCart callback", async () => {
    const handleAddToCart = jest.fn();
    render(<ArticleGrid products={dataProducts} onAddtoCart={handleAddToCart} loading={false} />);
    await user.click(screen.getAllByRole("button")[0]);
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
