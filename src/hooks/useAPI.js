import { useCallback, useContext } from "react";
import {
  setLoadingAction,
  unsetLoadingAction,
} from "../store/actions/api/actionsCreators";
import {
  getComicDetailAction,
  loadComicsAction,
  loadMyAPIComicsAction,
} from "../store/actions/comics/comicActionCreator";
import APIContext from "../store/contexts/APIContext";

import ComicContext from "../store/contexts/ComicContext";
import getQuery from "../utils/getQuery";

const useAPI = () => {
  const query = getQuery();

  const { dispatch, dispatchComic } = useContext(ComicContext);
  const { dispatch: dispatchAPI } = useContext(APIContext);

  const loadComicsAPI = useCallback(async () => {
    try {
      dispatchAPI(setLoadingAction());
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/comics?${query}`
      );

      const comics = await response.json();

      dispatch(loadComicsAction(comics.data.results));
    } catch (error) {
      return error.message;
    }
    dispatchAPI(unsetLoadingAction());
  }, [dispatch, dispatchAPI, query]);

  const getComicDetailAPI = useCallback(
    async (id) => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/comics/${id}?${query}`
        );

        const comics = await response.json();

        dispatchComic(getComicDetailAction(comics.data.results[0]));
      } catch (error) {
        return error.message;
      }
    },
    [query, dispatchComic]
  );

  const loadLocalAPI = useCallback(async () => {
    try {
      const response = await fetch(`https://becomics.onrender.com/comics/`);

      const myApiComics = await response.json();

      dispatch(loadMyAPIComicsAction(myApiComics));
    } catch (error) {
      return error.message;
    }
  }, [dispatch]);

  const addComic = async (comic) => {
    await fetch(`https://becomics.onrender.com/comics/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comic),
    });
  };

  const deleteComic = async (id) => {
    await fetch(`https://becomics.onrender.com/comics/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return {
    loadComicsAPI,
    getComicDetailAPI,
    loadLocalAPI,
    addComic,
    deleteComic,
  };
};

export default useAPI;
