import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the heading 'LA QUE SE TE AVECINA", () => {
      const expectedText = /la que se te avecina/i;

      render(<App />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
    test("Then it should show the texts, 'days', 'hours', 'minutes' and 'seconds'", () => {
      const expectedDaysText = "days";
      const expectedHoursText = "hours";
      const expectedMinutesText = "minutes";
      const expectedSecondsText = "seconds";

      render(<App />);

      const daysText = screen.getByText(expectedDaysText);
      const hoursText = screen.getByText(expectedHoursText);
      const minutesText = screen.getByText(expectedMinutesText);
      const secondsText = screen.getByText(expectedSecondsText);

      expect(daysText).toBeInTheDocument();
      expect(hoursText).toBeInTheDocument();
      expect(minutesText).toBeInTheDocument();
      expect(secondsText).toBeInTheDocument();
    });
  });
});
