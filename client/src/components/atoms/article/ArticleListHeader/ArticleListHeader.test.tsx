import { render } from "test-utils";
import ArticleListHeader from "./index";

describe("ArticleListHeader", () => {
  it("should render", () => {
    const { container } = render(<ArticleListHeader name="Test Heading" articleCount={123456} />);
    expect(container).toMatchSnapshot();
    expect(document.querySelector("h1")).toBeVisible();
    expect(document.querySelector("h1")).toHaveTextContent("Test Heading (123456)");
  });
});
