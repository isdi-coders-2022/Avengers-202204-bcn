import {
  loadComicsAction,
  loadMyAPIComicsAction,
} from "../actions/comics/comicActionCreator";
import comicsReducer from "./comicsReducer";

describe("Given a comicsReducer function", () => {
  describe("When it receives an loadMyAPIComicsAction and a comic", () => {
    test("Then it should return an object with the given comic inside his property localApiComics", () => {
      const myLocalComics = {
        title: "Spiderman",
      };

      const currentComics = {
        localApiComics: myLocalComics,
      };

      const expectedResult = {
        localApiComics: myLocalComics,
      };

      const action = loadMyAPIComicsAction(myLocalComics);

      const loadMyApiComics = comicsReducer(currentComics, action);

      expect(loadMyApiComics).toEqual(expectedResult);
    });
  });

  describe("When it receives an loadComicsAction and two comics", () => {
    test("Then it should return an object with the given two comics inside his property apiComics", () => {
      const comics = [
        {
          title: "Spiderman",
        },
        {
          title: "Superman",
        },
      ];

      const currentComics = {
        apiComics: comics,
      };

      const action = loadComicsAction(comics);

      const expectedResult = {
        apiComics: comics,
      };

      const loadComicAPI = comicsReducer(currentComics, action);

      expect(loadComicAPI).toEqual(expectedResult);
    });
  });

  describe("When it receives an invalid action", () => {
    test("Then it should return an currentComics object", () => {
      const currentComics = {
        apiComics: [
          {
            title: "Spiedrman",
          },
        ],
      };

      const action = {
        type: undefined,
      };

      const expectedResult = {
        apiComics: [
          {
            title: "Spiedrman",
          },
        ],
      };

      const defaultComics = comicsReducer(currentComics, action);

      expect(defaultComics).toEqual(expectedResult);
    });
  });
});
