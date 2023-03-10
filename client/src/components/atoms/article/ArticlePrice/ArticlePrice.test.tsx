import { render, screen } from "test-utils";
import ArticlePrice from "./index";

describe("ArticlePrice", () => {
  it("should render", () => {
    const { container } = render(<ArticlePrice currency="EUR" price={100} discount={10} salePrice={90} />);
    expect(container).toMatchSnapshot();
  });
  it("should render with discount", () => {
    render(<ArticlePrice currency="EUR" price={100} discount={10} salePrice={90} />);
    expect(screen.getByTestId("final-price")).toHaveTextContent("90,00 €");
    expect(screen.getByTestId("regular-price")).toHaveTextContent("100,00 €");
    expect(screen.getByTestId("discount-percent")).toHaveTextContent("-10%");
    expect(getComputedStyle(screen.getByTestId("regular-price")).textDecorationLine).toContain("line-through");
  });
  it("should render with no discount", () => {
    render(<ArticlePrice currency="EUR" price={100} />);
    expect(screen.getByTestId("final-price")).toHaveTextContent("100,00 €");
    expect(screen.queryByTestId("regular-price")).not.toBeInTheDocument();
    expect(screen.queryByTestId("discount-percent")).not.toBeInTheDocument();
  });
});
