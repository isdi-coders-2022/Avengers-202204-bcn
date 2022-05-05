import { useCallback, useContext } from "react";
import {
  setFetchComicsAction,
  setLoadingComicsAction,
} from "../store/actions/api/actionCreators";
import { loadComicsAction } from "../store/actions/comics/comicActionCreator";
import APIContext from "../store/contexts/APIContext";
import getQuery from "../utils/getQuery";

const useAPI = () => {
  const query = getQuery();

  const { dispatch } = useContext(APIContext);

  const loadComicsAPI = useCallback(async () => {
    try {
      dispatch(setLoadingComicsAction());

      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?${query}`
      );

      const comics = await response.json();

      // console.log(comics.data.results);
      dispatch(loadComicsAction(comics));

      dispatch(setFetchComicsAction(comics.data.results));
    } catch (error) {
      return error.message;
    }
  }, [dispatch]);

  return { loadComicsAPI };
};

export default useAPI;
