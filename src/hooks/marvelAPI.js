import { useCallback, useContext } from "react";
import {
  setFetchComicsAction,
  setLoadingComicsAction,
} from "../store/actions/api/actionCreators";
import APIContext from "../store/contexts/APIContext";
import getQuery from "../utils/getQuery";

const useAPI = () => {
  const query = getQuery();
  const { dispatch: dispatchAPI } = useContext(APIContext);

  const loadComicsAPI = useCallback(
    async (title = "superman") => {
      try {
        dispatchAPI(setLoadingComicsAction());

        const response = await fetch(
          `http://gateway.marvel.com/v1/public/comics?${
            title ? `title=${title}&` : ""
          }limit=20&${query}`
        );

        const comics = await response.json();
        dispatchAPI(setFetchComicsAction(comics.data.results));
      } catch (error) {
        return error.message;
      }
    },
    [dispatchAPI, query]
  );

  return { loadComicsAPI };
};

export default useAPI;
