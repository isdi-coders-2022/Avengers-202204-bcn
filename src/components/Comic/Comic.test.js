import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Comic from "./Comic";

describe("Given a Card component function", () => {
  describe("When invoked with an imageUrl", () => {
    test("Then it should render an image with a src propriety with the same imageUrl inside", () => {
      const imageUrl =
        "https://www.milcomics.com/1254117-large_default/el-imparable-spiderman-01.jpg";
      const expectedImgSrc =
        "https://www.milcomics.com/1254117-large_default/el-imparable-spiderman-01.jpg";

      render(<Comic imageUrl={imageUrl} />);

      const imageElement = screen.getByRole("img");

      expect(imageElement.src).toEqual(expectedImgSrc);
    });
  });

  describe("When invoked with a title property text'Spiderman'", () => {
    test("Then it should render an h3 element with the test 'Spiderman' inside", () => {
      const title = "Spiderman";

      render(<Comic title={title} />);

      const expectedText = screen.getByText(title);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
