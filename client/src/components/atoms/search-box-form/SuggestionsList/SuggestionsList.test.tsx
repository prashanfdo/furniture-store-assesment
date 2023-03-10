import user from "@testing-library/user-event";
import { render, screen } from "test-utils";
import SuggestionsList from "./index";

const dataSuggestions: React.ComponentProps<typeof SuggestionsList>["suggestions"] = [
  {
    name: "test 1",
    results: 1,
    image: "",
  },
  {
    name: "test 2",
    results: 2,
    image: "",
  },
  {
    name: "test 3",
    results: 3,
    image: "",
  },
];

describe("SuggestionsList", () => {
  beforeEach(() => {
    user.setup();
  });

  it("should render", () => {
    const { container } = render(<SuggestionsList suggestions={dataSuggestions} showSuggestions={true} />);
    expect(container).toMatchSnapshot();
  });

  it("should render links", () => {
    render(<SuggestionsList suggestions={dataSuggestions} showSuggestions={true} />);
    expect(screen.getAllByRole("link")).toHaveLength(dataSuggestions.length);
  });

  it("should not visible with no suggestions", () => {
    render(<SuggestionsList suggestions={[]} showSuggestions={true} />);
    expect(screen.queryByTestId("suggestion-list")).not.toBeInTheDocument();
  });

  it("should not visible with showSuggestions=false", () => {
    render(<SuggestionsList suggestions={dataSuggestions} showSuggestions={false} />);
    expect(screen.queryByTestId("suggestion-list")).not.toBeInTheDocument();
  });
});
