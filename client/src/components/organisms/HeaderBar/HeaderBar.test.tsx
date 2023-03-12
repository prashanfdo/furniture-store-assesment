import { render, screen } from "test-utils";
import HeaderBar from "./index";

jest.mock("components/organisms/SearchBox", () => () => <div data-testid="search-box" />);

describe("HeaderBar", () => {
  it("should render", () => {
    const { container } = render(<HeaderBar />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("search-box")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
    expect(screen.getByRole("img")).toHaveAttribute("alt", "site logo");
  });
});
