import { useCallback, useContext } from "react";
import {
  fetchComicDetailAction,
  loadComicsAction,
} from "../store/actions/comics/comicActionCreator";

import ComicContext from "../store/contexts/ComicContext";
import getQuery from "../utils/getQuery";

const useAPI = () => {
  const query = getQuery();
  const { dispatch } = useContext(ComicContext);

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

  return { loadComicsAPI, fetchComicDetailAPI };
};

export default useAPI;
