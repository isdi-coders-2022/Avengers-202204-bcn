import { addComicActionType, deleteComicActionType } from "./comicActionTypes";

export const addComicActionCreator = (comicId) => ({
  type: addComicActionType,
  comicId,
});

export const deleteComicActionCreator = (comicId) => ({
  type: deleteComicActionType,
  comicId,
});
