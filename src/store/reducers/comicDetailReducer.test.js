import comicDetailReducer from "./comicDetailReducer";

describe("Given a function comicDetailReducer", () => {
  describe("When it receives a comic and an action type get", () => {
    test("Then it should return an object including the given character", () => {
      const currentComic = {
        id: 3627,
        title: "Storm (2006)",
        format: "Comic",
      };

      const actionType = {
        type: "getCommicDetails",
      };

      const expectedCurrentComicResult = {
        id: 3627,
        title: "Storm (2006)",
        format: "Comic",
      };

      const newCharacterbyDefault = comicDetailReducer(
        currentComic,
        actionType
      );

      expect(newCharacterbyDefault).toEqual(expectedCurrentComicResult);
    });
  });

  describe("When it receives a comic and an incorrect action", () => {
    test("Then it should return a comic object with the given comic", () => {
      const currentComic = {
        id: 3627,
        title: "Storm (2006)",
        format: "Comic",
      };

      const actionType = {
        type: "notvalide",
      };

      const expectedCurrentComicResult = {
        id: 3627,
        title: "Storm (2006)",
        format: "Comic",
      };

      const newCharacterbyDefault = comicDetailReducer(
        currentComic,
        actionType
      );

      expect(newCharacterbyDefault).toEqual(expectedCurrentComicResult);
    });
  });
});
