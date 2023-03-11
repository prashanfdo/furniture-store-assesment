import user from "@testing-library/user-event";
import { render, screen } from "test-utils";
import SearchInput from "./index";

describe("SearchInput", () => {
  beforeEach(() => {
    user.setup();
  });

  it("should render", () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    const { container } = render(<SearchInput name="asd" onChange={handleChange} onBlur={handleBlur} />);
    expect(container).toMatchSnapshot();
  });

  it("should render textbox and button", () => {
    render(<SearchInput name="search" onChange={jest.fn()} onBlur={jest.fn()} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should invoke onchange callback", async () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();
    render(<SearchInput name="search" onChange={handleChange} onBlur={handleBlur} />);

    const textbox = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await user.type(textbox, "test");
    await user.click(button);

    expect(textbox).toHaveValue("test");
    expect(handleChange).toHaveBeenCalledTimes("test".length);
    expect(handleChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ target: expect.objectContaining({ value: "test" }) }),
    );

    expect(handleBlur).toHaveBeenCalled();
  });
});
