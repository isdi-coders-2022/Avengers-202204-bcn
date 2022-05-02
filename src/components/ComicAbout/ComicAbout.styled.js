import styled from "styled-components";

const StyledComicAbout = styled.div`
  position: relative;
  overflow: hidden;
  background: no-repeat url(/assets/Alien.jpeg) 50% 0;
  background-size: cover;
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

export default StyledComicAbout;
