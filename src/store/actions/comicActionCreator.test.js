import { deleteComicActionCreator } from "./comicActionCreator";

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
