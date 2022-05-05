import { useCallback, useContext } from "react";
import { setLoadingComicsAction } from "../store/actions/api/actionCreators";
import {
  fetchComicDetailAction,
  loadComicsAction,
} from "../store/actions/comics/comicActionCreator";
import APIContext from "../store/contexts/APIContext";
import ComicContext from "../store/contexts/ComicContext";
import getQuery from "../utils/getQuery";

const useAPI = () => {
  const query = getQuery();
  const { dispatch } = useContext(ComicContext);
  const { dispatch: dispatchAPI } = useContext(APIContext);

  const loadComicsAPI = useCallback(async () => {
    try {
      // dispatchAPI(setLoadingComicsAction());

      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?${query}`
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
        //  dispatchAPI(setLoadingComicsAction());

        const response = await fetch(
          `http://gateway.marvel.com/v1/public/comics/${id}?${query}`
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
