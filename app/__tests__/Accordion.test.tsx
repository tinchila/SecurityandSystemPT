import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "../../components/Accordion";

const accordionData = [
  { question: "Question 1", answer: "Answer 1" },
  { question: "Question 2", answer: "Answer 2" },
];

describe("Accordion component", () => {
  it("renders accordion items correctly", () => {
    render(<Accordion data={accordionData} />);

    accordionData.forEach(({ question, answer }) => {
      const questionElement = screen.getByText(question);
      expect(questionElement).toBeInTheDocument();

      const answerElement = screen.getByText(answer);
      expect(answerElement).toBeInTheDocument();
    });
  });

  it("toggles accordion item on click", () => {
    render(<Accordion data={accordionData} />);

    const question1 = screen.getByText("Question 1");
    const answer1 = screen.getByText("Answer 1");

    fireEvent.click(question1);
    expect(answer1).toBeVisible();

    fireEvent.click(question1);
    expect(answer1).not.toBeVisible();
  });
});
