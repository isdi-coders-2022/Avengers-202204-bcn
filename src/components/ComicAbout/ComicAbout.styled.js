import styled from "styled-components";

const StyledComicAbout = styled.div`
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
    object-position: 60% top;
    width: 100%;
  }

  /* position: relative;
  overflow: hidden;
  object-fit: scale-down;
  /* background-image: ${(props) => `url(/assets/${props.src}) `};
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover; */
  width: 100%;
  height: 63rem;
`;

export const StyledBackgroundFilter = styled.div`
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16px);
  position: absolute;
  inset: 0;
`;

export const StyledDivContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledTitle = styled.h1`
  color: #fff;
  font-size: 36px;
  margin-left: 13rem;
  margin-top: 2rem;
  z-index: 10;
`;

export const StyledAboutContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default StyledComicAbout;
