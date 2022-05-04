import { selectedComicActionCreator } from "./comicActionCreator";
import { removeComicActionCreator } from "./comicActionCreator";

describe("Given a selectedComicActionCreator", () => {
  describe("When it receives an id:2", () => {
    test("Then it should return an action with type 'selected-comic' and comicId=2", () => {
      const comicId = 2;
      const expectedAction = { type: "selected-comic", comicId: 2 };

      const action = selectedComicActionCreator(comicId);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a removeComicActionCreator function", () => {
  describe("When it receives an id '1'", () => {
    test("Then it should return an action with type 'remove-comic' and comicId: 1", () => {
      const comicId = 1;

      const expectedAction = {
        type: "remove-comic",
        comicId: 1,
      };

      const action = removeComicActionCreator(comicId);

      expect(action).toEqual(expectedAction);
    });
  });
});
