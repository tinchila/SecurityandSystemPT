import { render, fireEvent } from "@testing-library/react";
import MobileMenu from "../../components/MobileMenu";
import { navLinks, socialLinks } from "../../constants";

describe("MobileMenu component", () => {
  it("renders mobile menu with user name, navigation links, and social links", () => {
    const { getByText, getByAltText, queryByText, getByRole } = render(
      <MobileMenu />
    );

    // Check if user name is rendered
    const userNameElement = getByText(/UserName/i);
    expect(userNameElement).toBeInTheDocument();

    // Check if user image is rendered with correct alt text
    const userImage = getByAltText("user-img");
    expect(userImage).toBeInTheDocument();

    // Check if navigation links are initially not visible
    navLinks.forEach((link) => {
      const navLinkElement = queryByText(link.label);
      expect(navLinkElement).toBeNull();
    });

    // Open the mobile menu by clicking on the menu toggle button
    const menuToggleButton = getByRole("button", { name: /menu/i });
    fireEvent.click(menuToggleButton);

    // Check if navigation links are now visible after opening the menu
    navLinks.forEach((link) => {
      const navLinkElement = getByText(link.label);
      expect(navLinkElement).toBeInTheDocument();
    });

    // Check if social links are rendered
    socialLinks.forEach((link) => {
      const socialLinkElement = getByText(link.label);
      expect(socialLinkElement).toBeInTheDocument();
    });

    // Close the mobile menu by clicking on the close button
    const closeButton = getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    // Check if navigation links are hidden after closing the menu
    navLinks.forEach((link) => {
      const navLinkElement = queryByText(link.label);
      expect(navLinkElement).toBeNull();
    });
  });
});
