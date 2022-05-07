import comicActionTypes from "./comicActionTypes";

export const loadComicsAction = (comics) => ({
  type: comicActionTypes.loadComics,
  comics,
});

export const loadMyAPIComicsAction = (myLocalComics) => ({
  type: comicActionTypes.loadMyAPIComics,
  myLocalComics,
});

export const getComicDetailAction = (comic) => ({
  type: comicActionTypes.getCommicDetails,
  comic,
});

export const addComicAction = (comic) => ({
  type: comicActionTypes.addComic,
  comic,
});

export const removeComicAction = (id) => ({
  type: comicActionTypes.removeComic,
  id,
});

export const selectedComicAction = (comic) => ({
  type: comicActionTypes.selectedComic,
  comic,
});
