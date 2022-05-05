import { useCallback, useContext } from "react";
import {
  fetchComicDetailAction,
  loadComicsAction,
  loadMyAPIComicsAction,
} from "../store/actions/comics/comicActionCreator";

import ComicContext from "../store/contexts/ComicContext";
import getQuery from "../utils/getQuery";

const useAPI = () => {
  const query = getQuery();

  const { dispatch, myAPIComicsDispatch } = useContext(ComicContext);

  const loadComicsAPI = useCallback(async () => {
    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/comics?${query}`
      );

      const comics = await response.json();

      dispatch(loadComicsAction(comics.data.results));
    } catch (error) {
      return error.message;
    }
  }, [dispatch, query]);

  const fetchComicDetailAPI = useCallback(
    async (id) => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/comics/${id}?${query}`
        );

        const comics = await response.json();

        dispatch(fetchComicDetailAction(comics.data.results[0]));
      } catch (error) {
        return error.message;
      }
    },
    [dispatch, query]
  );

  const loadLocalAPI = useCallback(async () => {
    try {
      const response = await fetch(`https://becomics.onrender.com/comics/`);

      const myApiComics = await response.json();

      myAPIComicsDispatch(loadMyAPIComicsAction(myApiComics));
    } catch (error) {
      return error.message;
    }
  }, [myAPIComicsDispatch]);

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
    fetchComicDetailAPI,
    loadLocalAPI,
    addComic,
    deleteComic,
  };
};

export default useAPI;
