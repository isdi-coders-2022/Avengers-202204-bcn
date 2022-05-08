import { useState } from "react";
import ButtonText from "../ButtonText/ButtonText";
import FormStyles from "./FormStyles";

const Form = ({ createComic }) => {
  const [comic, setComic] = useState({
    title: "",
    type: "",
    character: "",
    description: "",
  });
  const handleChange = (event) => {
    setComic(event.target.value);
  };

  const addComic = (event) => {
    event.preventDefault();
    createComic({
      content: comic,
      important: Math.random() > 0.5,
    });

    setComic("");
  };

  return (
    <FormStyles>
      <div className="formDiv">
        <form onSubmit={addComic}>
          <label htmlFor="title">
            Comic Title:
            <input
              onChange={handleChange}
              value={comic.title}
              id="title"
              type="text"
              placeholder="Text to write"
            />
          </label>
          <label htmlFor="type">
            Comic Type:
            <input
              onChange={handleChange}
              value={comic.type}
              id="type"
              type="text"
              placeholder="Text"
            />
          </label>
          <label htmlFor="character">
            Main Character Name:
            <input
              onChange={handleChange}
              value={comic.character}
              id="character"
              type="text"
              placeholder="Text"
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              onChange={handleChange}
              value={comic.description}
              id="description"
              cols="30"
              rows="7"
              placeholder="Text"
            ></textarea>
          </label>
          <ButtonText type="submit" text={"CREATE"} />
        </form>
      </div>
    </FormStyles>
  );
};
export default Form;
