import { addComicActionCreator } from "./comicActionCreator";

describe("Given an addComicCreator", () => {
  describe("When it receives an id:2", () => {
    test("Then it should return an action with type 'add-comic' and comicId=2", () => {
      const comicId = 2;
      const expectedAction = { type: "add-comic", comicId: 2 };

      const action = addComicActionCreator(comicId);
      expect(action).toEqual(expectedAction);
    });
  });
});
