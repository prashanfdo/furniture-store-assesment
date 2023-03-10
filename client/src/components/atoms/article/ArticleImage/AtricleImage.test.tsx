import { render } from "test-utils";
import AtricleImage from "./index";

describe("AtricleImage", () => {
  it("should render", () => {
    const { container } = render(<AtricleImage src="https://picsum.photos/id/237/200/300" alt="test" />);
    expect(container).toMatchSnapshot();
    expect(document.querySelector("img")).toHaveAttribute("src", "https://picsum.photos/id/237/200/300");
    expect(document.querySelector("img")).toHaveAttribute("alt", "test");
    expect(document.querySelector("img")).toBeVisible();
  });
});
