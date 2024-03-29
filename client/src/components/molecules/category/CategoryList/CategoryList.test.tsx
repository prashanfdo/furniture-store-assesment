import { render, screen, user, within } from "test-utils";
import { createCategoryList } from "test-utils/generate-data";
import CategoryList from "./index";
import { ROOT_CATEGORY_ID } from "helpers/constants";

jest.mock("react-content-loader", () => () => <div data-testid="loading">Loading</div>);
const dataCategories: React.ComponentProps<typeof CategoryList>["categories"] = createCategoryList(10);

describe("CategoryList", () => {
  beforeEach(() => {
    user.setup();
  });

  it("should render", () => {
    const { container } = render(
      <CategoryList loading={false} error={false} categories={dataCategories} selectedCategoryId={ROOT_CATEGORY_ID} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render all links", () => {
    render(
      <CategoryList loading={false} error={false} categories={dataCategories} selectedCategoryId={ROOT_CATEGORY_ID} />,
    );
    expect(screen.queryAllByRole("link")).toHaveLength(dataCategories.length + 1); // +1 for "All" link
  });

  it("should render home link", () => {
    render(
      <CategoryList loading={false} error={false} categories={dataCategories} selectedCategoryId={ROOT_CATEGORY_ID} />,
    );
    const homeLink = within(screen.getByTestId(`cat-list-item-${ROOT_CATEGORY_ID}`)).getByRole("link");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
