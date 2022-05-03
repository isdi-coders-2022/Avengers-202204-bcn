import styled from "styled-components";

const StyleSearch = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-top: 2rem;
    width: 20rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: none;
  }
`;

export default StyleSearch;
