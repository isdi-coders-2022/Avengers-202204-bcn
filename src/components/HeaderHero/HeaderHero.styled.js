import styled from "styled-components";

const StyledHeaderHero = styled.div`
  overflow: hidden;
  width: 100%;
  height: 15rem;
  z-index: 10 !important;

  .thumbnail {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .comic-cover {
    position: absolute;
    width: 12rem;
    height: 301px;
    top: 8rem;
    left: 3rem;
    z-index: 9999;
  }
`;

export default StyledHeaderHero;
