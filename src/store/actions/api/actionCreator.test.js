import { setLoadingComicsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

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
