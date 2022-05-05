import { setFetchComicsAction, setLoadingComicsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a setFetchComicsAction", () => {
  describe("When it receives an array of comics", () => {
    test("Then it should return an action type 'fetch-comics' and the array of comics as value of comic property", () => {
      const comics = [
        {
          id: 1,
          title: "Spiderman",
        },
        {
          id: 2,
          title: "Superman",
        },
      ];

      const expectedAction = {
        type: actionTypes.fetchCommics,
        payload: [
          {
            id: 1,
            title: "Spiderman",
          },
          {
            id: 2,
            title: "Superman",
          },
        ],
      };

      const action = setFetchComicsAction(comics);
      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a setLoadingComicActions", () => {
  describe("When dispatched", () => {
    test("Then it should return an action type 'set-loading'", () => {
      const expectedAction = {
        type: actionTypes.setLoading,
      };

      const action = setLoadingComicsAction();
      expect(action).toEqual(expectedAction);
    });
  });
});
