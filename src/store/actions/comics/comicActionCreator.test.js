import actionTypes from "../api/actionTypes";
import { removeComicAction, selectedComicAction } from "./comicActionCreator";

describe("Given a selectedComicAction", () => {
  describe("When it receives an id:2", () => {
    test("Then it should return an action with type 'selected-comic' and comicId=2", () => {
      const id = 2;
      const expectedAction = { type: actionTypes.selectedComic, id: 2 };

      const action = selectedComicAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a removeComicAction function", () => {
  describe("When it receives an id '1'", () => {
    test("Then it should return an action with type 'remove-comic' and comicId: 1", () => {
      const id = 1;

      const expectedAction = {
        type: actionTypes.removeComic,
        id: 1,
      };

      const action = removeComicAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});
