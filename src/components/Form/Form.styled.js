import styled from "styled-components";

const StyledForm = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 500;
    overflow: auto;
    background-color: #efefef;
  }

  .slider {
    overflow-y: hidden;
    max-height: 100vh;
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

    &.close {
      max-height: 0;
    }
  }
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
