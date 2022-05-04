import {
  addComicActionType,
  deleteComicActionType,
  createComicActionType,
} from "./comicActionTypes";

export const addComicActionCreator = (comicId) => ({
  type: addComicActionType,
  comicId,
});

export const deleteComicActionCreator = (comicId) => ({
  type: deleteComicActionType,
  comicId,
});

export const createComicActionCreator = (comic) => ({
  type: createComicActionType,
  comic,
});
