import {
  setLoadingAction,
  unsetLoadingAction,
} from "../actions/api/actionsCreators";
import apiReducer from "./apiReducer";

describe("Given a function apiReducer", () => {
  describe("When it receives the current state and an action with type setLoading", () => {
    test("Then it should return a new state with the property setLoading to true", () => {
      const action = setLoadingAction();
      const currentState = {};
      const expectedSetLoadingValue = true;

      const newState = apiReducer(currentState, action);

      expect(newState.loading).toBe(expectedSetLoadingValue);
    });

    test("Then it should return a new state with the property setLoading to false", () => {
      const action = unsetLoadingAction();
      const currentState = {};
      const expectedSetLoadingValue = false;

      const newState = apiReducer(currentState, action);

      expect(newState.loading).toBe(expectedSetLoadingValue);
    });
  });
});
