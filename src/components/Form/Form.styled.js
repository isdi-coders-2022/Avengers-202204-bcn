import styled from "styled-components";

const StyledForm = styled.div`
  background-color: #efefef;
  form {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 0.7rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: all 0.3s;
    transform: translateY(0rem);
    input {
      padding: 1rem 1rem;
      border-radius: 0.5rem;
      border: none;
    }

    label {
      display: flex;
      flex-direction: column;
    }
    textarea {
      padding: 1rem 1rem;
      border-radius: 0.5rem;
      border: none;
    }
  }
`;

export default StyledForm;
