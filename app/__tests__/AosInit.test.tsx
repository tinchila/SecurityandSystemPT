import { render } from "@testing-library/react";
import { useEffect } from "react";
import AOS from "aos";
import { AOSInit } from "../../components/Aos";
import React from "react";

// Mock AOS init function
jest.mock("aos", () => ({
  init: jest.fn(),
}));

// Mock useEffect hook
jest.spyOn(React, "useEffect").mockImplementation((f) => f());

describe("AOSInit component", () => {
  it("should initialize AOS with correct options", () => {
    render(<AOSInit />);

    // Verify that useEffect is called
    expect(useEffect).toHaveBeenCalled();

    // Verify that AOS.init() is called with the correct options
    expect(AOS.init).toHaveBeenCalledWith({
      once: true,
    });
  });

  // Optionally, you can add more specific tests here related to the useEffect behavior
});
