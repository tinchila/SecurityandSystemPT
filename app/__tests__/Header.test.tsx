import { render } from "@testing-library/react";
import Header from "../../components/Header";
import { navLinks } from "../../constants";

describe("Header component", () => {
  it("renders header with user name and navigation links", () => {
    const { getByText, getByAltText } = render(<Header />);

    // Check if user name is rendered
    const userNameElement = getByText(/UserName/i);
    expect(userNameElement).toBeInTheDocument();

    // Check if user image is rendered with correct alt text
    const userImage = getByAltText("user-img");
    expect(userImage).toBeInTheDocument();

    // Check if navigation links are rendered
    navLinks.forEach((link) => {
      const navLinkElement = getByText(link.label);
      expect(navLinkElement).toBeInTheDocument();
    });
  });
});
