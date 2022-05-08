import { addComicAction, removeComicAction } from "./comicActionCreator";
import comicActionTypes from "./comicActionTypes";

describe("Given a addComicAction", () => {
  describe("When it receives an id:2", () => {
    test("Then it should return an action with type 'selected-comic' and comicId=2", () => {
      const comic = {
        id: 1,
        title: "Spiderman",
      };

      const expectedAction = {
        type: comicActionTypes.addComic,
        comic,
      };

      const action = addComicAction(comic);

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
