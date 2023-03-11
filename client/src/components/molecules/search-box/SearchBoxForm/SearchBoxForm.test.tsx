import user from "@testing-library/user-event";
import { createSearchSuggestionList, render, screen, waitFor } from "test-utils";
import SearchBoxForm from "./index";
import { ROOT_CATEGORY_ID } from "helpers/constants";

const dataSuggestions = createSearchSuggestionList(10);

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
    expect(screen.queryAllByRole("link")).toHaveLength(dataSuggestions.length);
    expect(screen.queryAllByRole("link").map((el) => el.textContent)).toEqual(
      expect.arrayContaining(dataSuggestions.map((el) => el.name)),
    );
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
