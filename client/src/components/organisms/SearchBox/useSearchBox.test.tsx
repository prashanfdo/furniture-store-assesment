import { act, createGqlResult, renderHook } from "test-utils";
import useSearchBox from "./useSearchBox";
import useSearchSuggestionsQuery from "queries/useSearchSuggestionsQuery";
import { useSearchParams } from "react-router-dom";
import {
  SearchSuggestionsQueryData,
  SearchSuggestionsQueryVars,
} from "queries/useSearchSuggestionsQuery/useSearchSuggestionsQuery.types";

jest.mock("queries/useSearchSuggestionsQuery");
const mockUseSearchSuggestionsQuery = useSearchSuggestionsQuery as jest.MockedFunction<
  typeof useSearchSuggestionsQuery
>;
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: jest.fn(),
}));
const mockUseSearchParams = useSearchParams as jest.MockedFunction<typeof useSearchParams>;

describe("useSearchBox", () => {
  it("should render", async () => {
    mockUseSearchSuggestionsQuery.mockReturnValue(
      createGqlResult<SearchSuggestionsQueryData, SearchSuggestionsQueryVars>({
        loading: false,
      }),
    );
    mockUseSearchParams.mockReturnValue([new URLSearchParams(""), jest.fn()]);
    const { result } = renderHook(() => useSearchBox());
    expect(result.current).toMatchSnapshot();
  });

  it("should return initial search text from current url", () => {
    mockUseSearchSuggestionsQuery.mockReturnValue(
      createGqlResult<SearchSuggestionsQueryData, SearchSuggestionsQueryVars>({
        loading: false,
      }),
    );
    mockUseSearchParams.mockReturnValue([new URLSearchParams("searchText=Test"), jest.fn()]);
    const { result } = renderHook(() => useSearchBox());
    expect(result.current).toMatchSnapshot();
    // TODO: fix this test
  });

  it("should invoke handleSubmit", () => {
    mockUseSearchSuggestionsQuery.mockReturnValue(
      createGqlResult<SearchSuggestionsQueryData, SearchSuggestionsQueryVars>({
        loading: false,
      }),
    );
    mockUseSearchParams.mockReturnValue([new URLSearchParams("searchText=Test"), jest.fn()]);
    const { result } = renderHook(() => useSearchBox());
    act(() => {
      result.current.handleSearchSubmit("Test");
    });
    // TODO: fix this test
  });
});

export default useSearchBox;
