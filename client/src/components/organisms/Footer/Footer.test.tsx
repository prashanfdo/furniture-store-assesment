import { render, screen } from "test-utils";
import Footer from "./index";

describe("Footer", () => {
  it("should render", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
