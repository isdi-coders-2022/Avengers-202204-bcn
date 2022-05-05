import actionTypes from "../actions/api/actionTypes";

const comicsReducer = (currentComics, action) => {
  let newComics;

  switch (action.type) {
    case actionTypes.loadComics:
      newComics = [...action.comics];
      break;

    default:
      newComics = [...currentComics];
  }

  return newComics;
};

export default comicsReducer;
