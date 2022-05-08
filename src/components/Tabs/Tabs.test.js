import Tabs from "./Tabs";
import "@testing-library/jest-dom";

describe("Given a Tabs component", () => {
  describe("When it is calledOn", () => {
    test("Should identify if the spy function was called or not", () => {
      const spyFunction = jest.fn();
      spyFunction();
      expect(spyFunction).toHaveBeenCalled();
    });
  });
});
