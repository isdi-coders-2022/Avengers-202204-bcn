import {
  selectComicActionType,
  deleteComicActionType,
} from "./comicActionTypes";

export const selectComicActionCreator = (comicId) => ({
  type: selectComicActionType,
  comicId,
});

export const deleteComicActionCreator = (comicId) => ({
  type: deleteComicActionType,
  comicId,
});
