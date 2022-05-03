import ButtonText from "../ButtonText/ButtonText";
import StyledForm from "./Form.styled";

const FormText = () => {
  return (
    <StyledForm>
      <label htmlFor="titleInput">
        Comic Title:
        <input id="titleInput" type="text" placeholder="Text" />
      </label>
      <label htmlFor="typeInput">
        Comic Type:
        <input id="typeInput" type="text" placeholder="Text" />
      </label>
      <label htmlFor="characterInput">
        Main Character Name:
        <input id="characterInput" type="text" placeholder="Text" />
      </label>
      <label htmlFor="descriptionInput">
        Description:
        <textarea
          name=""
          id="descriptionInput"
          cols="30"
          rows="7"
          placeholder="Text"
        ></textarea>
      </label>
      <ButtonText type="submit" text={"CREATE"} />
    </StyledForm>
  );
};
export default FormText;
