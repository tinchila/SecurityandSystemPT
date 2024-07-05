import { render, fireEvent } from "@testing-library/react";
import TestimonialSection from "../../components/TestimonialSection";
import { reviews } from "../../constants";

describe("TestimonialSection component", () => {
  it("renders correctly with reviews and swiper navigation", () => {
    // Render TestimonialSection component
    const { getByText, getAllByText, getByRole } = render(
      <TestimonialSection />
    );

    // Check if section heading renders
    expect(getByText("Whay my coworkers say about me")).toBeInTheDocument();

    // Check if total reviews count renders correctly
    expect(getByText(`${reviews.length} total reviews`)).toBeInTheDocument();

    // Check if swiper navigation buttons are present
    const prevButton = getByRole("button", { name: /chevronleft/i });
    const nextButton = getByRole("button", { name: /chevronright/i });
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    // Click on next button and check if reviews slide
    fireEvent.click(nextButton);
    reviews.forEach((review) => {
      expect(getByText(review.name)).toBeInTheDocument();
    });

    // Click on previous button and check if reviews slide back
    fireEvent.click(prevButton);
    reviews.forEach((review) => {
      expect(getByText(review.name)).toBeInTheDocument();
    });
  });
});
