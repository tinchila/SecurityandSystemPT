import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import NavLink from "../../components/NavLink";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("NavLink component", () => {
  it("renders NavLink with correct class based on pathname", () => {
    // Mock useRouter to return a mock pathname
    const mockUseRouter = useRouter as jest.Mock;
    mockUseRouter.mockImplementation(() => ({
      pathname: "/somepath",
    }));

    // Define props for NavLink
    const props = {
      href: "/somepath",
      label: "Some Path",
      className: "custom-class",
    };

    // Render NavLink with props
    const { getByText } = render(<NavLink {...props} />);

    // Check if NavLink renders with correct label
    const linkElement = getByText("Some Path");
    expect(linkElement).toBeInTheDocument();

    // Check if NavLink renders with correct className based on pathname
    expect(linkElement).toHaveClass("after:block");
    expect(linkElement).toHaveClass("after:absolute");
    expect(linkElement).toHaveClass("after:left-0");
    expect(linkElement).toHaveClass("after:h-0.5");
    expect(linkElement).toHaveClass("after:bg-purple");
    expect(linkElement).toHaveClass("after:w-full");
    expect(linkElement).toHaveClass("after:scale-x-0");
    expect(linkElement).toHaveClass("after:origin-left");

    // Cleanup
    mockUseRouter.mockReset();
  });
});
