import { render } from "test-utils";
import ImageSlider from "./index";

describe("ImageSlider", () => {
  it("should render", () => {
    const { container } = render(<ImageSlider />);
    expect(container).toMatchSnapshot();
  });
});
