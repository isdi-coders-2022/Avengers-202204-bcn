import styled from "styled-components";

const StyledHeaderHero = styled.div`
  overflow: hidden;
  width: 100%;
  height: 15rem;
  z-index: 10 !important;

  .logos {
    position: absolute;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .marvel-logo {
    width: 5rem;
    height: 2rem;
    object-fit: cover;
  }

  .thumbnail {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .comic-cover {
    opacity: 1;
    position: absolute;
    width: 12rem;
    height: 301px;
    top: 8rem;
    left: 3rem;
    z-index: 9999;
  }

  .comic-cover.on {
    opacity: 0;
  }
`;

export default StyledHeaderHero;
