import { render } from "test-utils";
import AddToCartButton from "./index";

describe("Components", () => {
  describe("Atoms", () => {
    describe("AddToCartButton", () => {
      it("should render", () => {
        const { container } = render(<AddToCartButton />);
        expect(container).toMatchSnapshot();
      });
    });
  });
});
