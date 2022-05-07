import actionsTypes from "../actions/api/actionsTypes";

const apiReducer = (apiStatus, action) => {
  let newApiStatus;

  switch (action.type) {
    case actionsTypes.setLoading:
      newApiStatus = {
        ...apiStatus,
        loading: true,
      };
      break;

    default:
      newApiStatus = { ...apiStatus };
  }

  return newApiStatus;
};

export default apiReducer;
