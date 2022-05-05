import { useCallback, useContext } from "react";
import { setLoadingComicsAction } from "../store/actions/api/actionCreators";
import { loadComicsAction } from "../store/actions/comics/comicActionCreator";
import APIContext from "../store/contexts/APIContext";
import ComicContext from "../store/contexts/ComicContext";
import getQuery from "../utils/getQuery";

const useAPI = () => {
  const query = getQuery();
  const { dispatch } = useContext(ComicContext);
  const { dispatch: dispatchAPI } = useContext(APIContext);

  const loadComicsAPI = useCallback(async () => {
    try {
      dispatchAPI(setLoadingComicsAction());

      const response = await fetch(
        `http://gateway.marvel.com/v1/public/comics?${query}`
      );

      const comics = await response.json();

      dispatch(loadComicsAction(comics.data.results));
    } catch (error) {
      return error.message;
    }
  }, [dispatch, query, dispatchAPI]);

  return { loadComicsAPI };
};

export default useAPI;
