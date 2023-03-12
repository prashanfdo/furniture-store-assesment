import { createArticle, render, screen, user } from "test-utils";
import ArticleThumb from "./index";

const dataProduct: React.ComponentProps<typeof ArticleThumb>["product"] = createArticle(true);

describe("ArticleThumb", () => {
  beforeEach(() => {
    user.setup();
  });

  it("should render", () => {
    const handleAddToCart = jest.fn();
    const { container } = render(<ArticleThumb product={dataProduct} onAddtoCart={handleAddToCart} />);
    expect(container).toMatchSnapshot();
  });

  it("should render name, image", async () => {
    const handleAddToCart = jest.fn();
    const { container } = render(<ArticleThumb product={dataProduct} onAddtoCart={handleAddToCart} />);
    expect(container.innerHTML).toContain(dataProduct.name);
    expect(container.innerHTML).toContain(dataProduct.images[0].path);
  });

  it("should invoke onAddtoCart callback", async () => {
    const handleAddToCart = jest.fn();
    render(<ArticleThumb product={dataProduct} onAddtoCart={handleAddToCart} />);
    await user.click(screen.getByRole("button"));
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
