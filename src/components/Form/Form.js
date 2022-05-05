import { useState } from "react";
import ButtonText from "../ButtonText/ButtonText";
import FormStyles from "./FormStyles";

const FormText = () => {
  const [show, setShow] = useState(true);
  const [comic, setComic] = useState({
    title: "",
    type: "",
    character: "",
    description: "",
  });
  return (
    <FormStyles>
      {show ? (
        <div>
          <form action="url">
            <label htmlFor="title">
              Comic Title:
              <input
                onChange={(event) =>
                  setComic({ ...comic, title: event.target.value })
                }
                value={comic.title}
                id="title"
                type="text"
                placeholder="Text"
              />
            </label>
            <label htmlFor="type">
              Comic Type:
              <input
                onChange={(event) =>
                  setComic({ ...comic, type: event.target.value })
                }
                value={comic.type}
                id="type"
                type="text"
                placeholder="Text"
              />
            </label>
            <label htmlFor="character">
              Main Character Name:
              <input
                onChange={(event) =>
                  setComic({ ...comic, character: event.target.value })
                }
                value={comic.character}
                id="character"
                type="text"
                placeholder="Text"
              />
            </label>
            <label htmlFor="description">
              Description:
              <textarea
                onChange={(event) =>
                  setComic({ ...comic, description: event.target.value })
                }
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
      ) : null}
      <button onClick={() => setShow(true)}>show</button>
    </FormStyles>
  );
};
export default FormText;
