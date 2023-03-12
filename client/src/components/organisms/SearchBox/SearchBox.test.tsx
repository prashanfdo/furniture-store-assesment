import { render } from "test-utils";
import SearchBox from ".";
import useSearchBox from "./useSearchBox";

jest.mock("./useSearchBox");
jest.mock("components/molecules", () => {
  return {
    SearchBoxForm: () => <div data-testid="search-box-form" />,
  };
});
const mockuseSearchBox = useSearchBox as jest.MockedFunction<typeof useSearchBox>;

describe("SearchBox", () => {
  beforeEach(() => {
    mockuseSearchBox.mockReset();
  });

  it("should render", async () => {
    mockuseSearchBox.mockReturnValue({
      initialSearchText: "test search",
      onSearchChange: jest.fn(),
    } as never);
    const { container } = render(<SearchBox />);
    expect(container).toMatchSnapshot();
  });
});

export default useSearchBox;
