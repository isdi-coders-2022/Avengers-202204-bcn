import StyleForm from "./StyleForm";

const Form = ({ label }) => {
  return (
    <StyleForm>
      <div>
        <form>
          <label htmlFor="title">
            {label}
            <input type="text" />
          </label>
        </form>
        <form>
          <label htmlFor="title">
            {label}
            <input type="text" />
          </label>
        </form>
        <form>
          <label htmlFor="title">
            {label}
            <input type="text" />
          </label>
        </form>
        <form>
          <label htmlFor="title">
            {label}
            <input type="text" />
          </label>
        </form>
      </div>
    </StyleForm>
  );
};
export default Form;
