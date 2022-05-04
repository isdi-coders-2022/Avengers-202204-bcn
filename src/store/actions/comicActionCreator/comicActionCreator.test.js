import {
  deleteComicActionCreator,
  selectComicActionCreator,
} from "./comicActionCreator";

describe("Given an selectComicCreator", () => {
  describe("When it receives an id:2", () => {
    test("Then it should return an action with type 'add-comic' and comicId=2", () => {
      const comicId = 2;
      const expectedAction = { type: "select-comic", comicId: 2 };

      const action = selectComicActionCreator(comicId);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteComicActionCreator function", () => {
  describe("When it receives an id '1'", () => {
    test("Then it should return an action with type 'delete-comic' and comicId: 1", () => {
      const comicId = 1;

      const expectedAction = {
        type: "delete-comic",
        comicId: 1,
      };

      const action = deleteComicActionCreator(comicId);

      expect(action).toEqual(expectedAction);
    });
  });
});
