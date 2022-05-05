import comicActionsTypes from "./comicActionTypes";

export const loadComicsAction = (comics) => ({
  type: comicActionsTypes.loadComics,
  comics,
});

export const loadMyAPIComicsAction = (myLocalComics) => ({
  type: comicActionsTypes.loadMyAPIComics,
  myLocalComics,
});

export const fetchComicDetailAction = (comic) => ({
  type: comicActionsTypes.fetchCommicDetails,
  comic,
});

export const addComicAction = (comic) => ({
  type: comicActionsTypes.addComic,
  comic,
});

export const removeComicAction = (id) => ({
  type: comicActionsTypes.removeComic,
  id,
});

export const selectedComicAction = (comic) => ({
  type: comicActionsTypes.selectedComic,
  comic,
});
