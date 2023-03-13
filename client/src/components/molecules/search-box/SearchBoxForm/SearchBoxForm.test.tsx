import { createSearchSuggestionList, render, screen, user } from "test-utils";
import SearchBoxForm from "./index";

const dataSuggestions = createSearchSuggestionList(10);
jest.mock("usehooks-ts", () => ({
  useDebounce: (text: string) => text,
}));

describe("SearchBoxForm", () => {
  beforeEach(() => {
    user.setup();
  });

  it("should render", () => {
    const { container } = render(
      <SearchBoxForm
        initialSearchText="first search"
        onSearchChange={jest.fn()}
        onSearchSubmit={jest.fn()}
        showSuggestions={true}
        suggestions={[]}
      />,
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("textbox")).toHaveValue("first search");
  });

  it("should render suggestion list when passed", () => {
    render(
      <SearchBoxForm
        initialSearchText="first search"
        onSearchChange={jest.fn()}
        onSearchSubmit={jest.fn()}
        showSuggestions={true}
        suggestions={dataSuggestions}
      />,
    );
    const links = screen.queryAllByRole("link", {
      hidden: true,
    });
    expect(links).toHaveLength(dataSuggestions.length);
    expect(links.map((el) => el.textContent)).toEqual(expect.arrayContaining(dataSuggestions.map((el) => el.name)));
  });

  it("should not render suggestion list when showSuggestions=false", () => {
    render(
      <SearchBoxForm
        initialSearchText="first search"
        onSearchChange={jest.fn()}
        onSearchSubmit={jest.fn()}
        showSuggestions={false}
        suggestions={dataSuggestions}
      />,
    );
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("should invoke callbacks onchange, onsubmit, setShowSuggestions", async () => {
    const handleSearchChange = jest.fn();
    const handleSearchSubmit = jest.fn();

    render(
      <SearchBoxForm
        initialSearchText=""
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        showSuggestions={false}
        suggestions={[]}
      />,
    );

    const searchText = "second search";
    const input = screen.getByRole<HTMLInputElement>("textbox");

    expect(input).toHaveValue("");

    await user.type(input, searchText);
    expect(input).toHaveValue(searchText);
    expect(handleSearchChange).toHaveBeenCalled();
    expect(handleSearchChange).toHaveBeenLastCalledWith(searchText);

    await user.type(input, "{enter}");
    expect(handleSearchSubmit).toHaveBeenCalledTimes(1);
    expect(handleSearchSubmit).toHaveBeenLastCalledWith(searchText);
  });
});
