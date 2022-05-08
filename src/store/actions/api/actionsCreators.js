import actionsTypes from "./actionsTypes";

export const setLoadingAction = () => ({
  type: actionsTypes.setLoading,
});

export const unsetLoadingAction = () => ({
  type: actionsTypes.unsetLoading,
});
