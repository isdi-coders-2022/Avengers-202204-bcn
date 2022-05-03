import styled from "styled-components";

const ComicStyles = styled.div`
  .comic {
    position: relative;
    box-shadow: 0 0 10px 5px;

    &__image {
      width: 100%;
      height: 100%;
    }

    &__layout {
      position: absolute;
      left: 10%;
      color: #fff;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2vw;
    }
  }

  .comic:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }
`;

export default ComicStyles;
