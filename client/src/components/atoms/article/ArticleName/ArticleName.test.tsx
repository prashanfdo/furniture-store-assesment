import { render } from "test-utils";
import ArticleName from "./index";

describe("ArticleName", () => {
  it("should render", () => {
    const { container } = render(<ArticleName>Article One</ArticleName>);
    expect(container).toMatchSnapshot();
    expect(document.querySelector("h4")).toBeVisible();
    expect(document.querySelector("h4")).toHaveTextContent("Article One");
  });
});
