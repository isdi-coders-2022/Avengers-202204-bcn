import actionTypes from "../actions/api/actionTypes";

const apiReducer = (apiStatus, action) => {
  let newAPIStatus;

  switch (action.type) {
    case actionTypes.setLoading:
      newAPIStatus = {
        ...apiStatus,
        loading: true,
      };
      break;

    case actionTypes.fetchCommics:
      newAPIStatus = {
        ...apiStatus,
        data: action.payload,
        loading: false,
      };
      break;

    default:
      newAPIStatus = { ...apiStatus };
  }

  return newAPIStatus;
};

export default apiReducer;
