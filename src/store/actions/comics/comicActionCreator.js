import {
  selectedComicActionType,
  removeComicActionType,
  createComicActionType,
} from "./comicActionTypes";

export const selectedComicActionCreator = (comicId) => ({
  type: selectedComicActionType,
  comicId,
});

export const removeComicActionCreator = (comicId) => ({
  type: removeComicActionType,
  comicId,
});

export const createComicActionCreator = (comic) => ({
  type: createComicActionType,
  comic,
});
