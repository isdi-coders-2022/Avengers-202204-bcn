import { addComicActionType } from "./comicActionTypes";
const addComicActionCreator = (comicId) => ({
  type: addComicActionType,
  comicId,
});
export default addComicActionCreator;
