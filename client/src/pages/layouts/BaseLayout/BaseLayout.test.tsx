import { render, screen } from "test-utils";
import BaseLayout from "./index";

jest.mock("components/organisms/CategorySidebar", () => () => <div data-testid="category-sidebar" />);
jest.mock("components/organisms/Footer", () => () => <div data-testid="footer" />);
jest.mock("components/organisms/HeaderBar", () => () => <div data-testid="header-bar" />);
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useMatches: () => jest.fn(),
}));
const dataPage = () => <div data-testid="page" />;

describe("BaseLayout", () => {
  it("should render", () => {
    const { container } = render(<BaseLayout page={dataPage} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("category-sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByTestId("header-bar")).toBeInTheDocument();
    expect(screen.getByTestId("page")).toBeInTheDocument();
  });
});
