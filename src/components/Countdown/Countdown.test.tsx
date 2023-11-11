import { render, screen } from "@testing-library/react";
import Countdown from "./Countdown";

describe("Given the Countdown component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'days'", () => {
      const expectedText = "days";

      render(<Countdown />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
    test("Then it should show the text 'hours'", () => {
      const expectedText = "hours";

      render(<Countdown />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
    test("Then it should show the text 'minutes'", () => {
      const expectedText = "minutes";

      render(<Countdown />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
    test("Then it should show the text 'seconds'", () => {
      const expectedText = "seconds";

      render(<Countdown />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
