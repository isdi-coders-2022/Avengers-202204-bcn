import {
  selectedComicActionType,
  removeComicActionType,
} from "./comicActionTypes";

const comicReducer = (currentComicList, action) => {
  let newComic;

  switch (action.type) {
    case selectedComicActionType:
      newComic = [...currentComicList, action.selectedComicId];
      break;
    case removeComicActionType:
      newComic = currentComicList.filter(
        (comic) => comic.comicId !== action.comicId
      );
      break;
    default:
      newComic = [...currentComicList];
  }

  return newComic;
};

export default comicReducer;
