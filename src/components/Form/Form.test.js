import Form from "../Form/Form";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Given a Form component", () => {
  describe("When it is calledOn", () => {
    test("Should identify if the spy function was called or not", () => {
      const spyFunction = jest.fn();
      spyFunction();
      expect(spyFunction).toHaveBeenCalled();
    });
    test("<Form /> updates parent state and calls onSubmit", () => {
      const createComic = jest.fn();

      render(<Form createComic={createComic} />);

      const input = screen.getByPlaceholderText("Text to write");
      const sendButton = screen.getByText("CREATE");

      userEvent.type(input, "Text just for test...");
      userEvent.click(sendButton);

      expect(createComic.mock.calls).toHaveLength(1);
      expect(createComic.mock.calls[0][0].content).toBe(
        "Text just for test..."
      );
    });
  });
});
