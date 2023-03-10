import { render, screen } from "test-utils";
import CategorySidebarLink from "./index";

describe("CategorySidebarLink", () => {
  it("should render", () => {
    const { container } = render(
      <CategorySidebarLink isActive={true} to="/test-link">
        test link
      </CategorySidebarLink>,
    );
    expect(container).toMatchSnapshot();
  });
  it("should render link with text", () => {
    render(
      <CategorySidebarLink isActive={true} to="/test-link">
        test link
      </CategorySidebarLink>,
    );
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test-link");
    expect(screen.getByRole("link")).toHaveTextContent("test link");
  });
});
