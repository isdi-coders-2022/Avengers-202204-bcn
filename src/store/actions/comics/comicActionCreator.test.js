import { removeComicAction, selectedComicAction } from "./comicActionCreator";
import comicActionTypes from "./comicActionTypes";

describe("Given a selectedComicAction", () => {
  describe("When it receives an id:2", () => {
    test("Then it should return an action with type 'selected-comic' and comicId=2", () => {
      const comic = 2;

      const expectedAction = {
        type: comicActionTypes.selectedComic,
        comic: 2,
      };

      const action = selectedComicAction(comic);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a removeComicAction function", () => {
  describe("When it receives an id '1'", () => {
    test("Then it should return an action with type 'remove-comic' and comicId: 1", () => {
      const id = 1;

      const expectedAction = {
        type: comicActionTypes.removeComic,
        id: 1,
      };

      const action = removeComicAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});
