import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";

// Mock data for testing
const mockNavLinks = [
  { url: "/home", label: "Home" },
  { url: "/about", label: "About" },
  { url: "/contact", label: "Contact" },
];

const mockSocialLinks = [
  { url: "https://twitter.com", icon: "TwitterIcon" },
  { url: "https://facebook.com", icon: "FacebookIcon" },
  { url: "https://instagram.com", icon: "InstagramIcon" },
];

const mockContactDetails = [
  { icon: "PhoneIcon", text: "123-456-7890" },
  { icon: "EmailIcon", text: "info@example.com" },
];

jest.mock("@/constants", () => ({
  navLinks: mockNavLinks,
  socialLinks: mockSocialLinks,
  contactDetails: mockContactDetails,
}));

test("renders footer component correctly", () => {
  render(<Footer />);

  // Test business logo link
  const logoElement = screen.getByText(/Business Logo/i);
  expect(logoElement).toBeInTheDocument();

  // Test navigation links
  mockNavLinks.forEach((link) => {
    const navLinkElement = screen.getByText(link.label);
    expect(navLinkElement).toBeInTheDocument();
  });

  // Test social links
  mockSocialLinks.forEach((link) => {
    const socialLinkElement = screen.getByRole("link", {
      name: /Twitter|Facebook|Instagram/i,
    });
    expect(socialLinkElement).toBeInTheDocument();
  });

  // Test contact details
  mockContactDetails.forEach((detail) => {
    const contactDetailElement = screen.getByText(detail.text);
    expect(contactDetailElement).toBeInTheDocument();
  });

  // Test copyright text
  const copyrightElement = screen.getByText(
    /Copyright © \d{4} Web Designer\. All right reserved\./i
  );
  expect(copyrightElement).toBeInTheDocument();
});
