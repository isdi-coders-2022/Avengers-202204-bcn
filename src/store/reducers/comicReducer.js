import {
  selectComicActionType,
  deleteComicActionType,
} from "./comicActionTypes";

const comicReducer = (currentComicList, action) => {
  let newComicList;

  switch (action.type) {
    case selectComicActionType:
      newComicList = [...currentComicList, action.comicId];
      break;
    case deleteComicActionType:
      newComicList = currentComicList.filter(
        (comic) => comic.id !== action.comicId
      );
      break;
    default:
      newComicList = [...currentComicList];
  }
  return newComicList;
};

export default comicReducer;
