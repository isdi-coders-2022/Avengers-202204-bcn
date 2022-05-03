import styled from "styled-components";

const StyledHeaderHero = styled.div`
  overflow: hidden;
  background: ${(props) => `url(/assets/${props.src})`} no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 18rem;
  z-index: 10 !important;
`;

export const StyledThumbnail = styled.div`
  position: absolute;
  background-image: ${(props) => `url(/assets/${props.src})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 14rem;
  height: 301px;
  top: 8rem;
  left: 3rem;
  z-index: 9999;
`;

export default StyledHeaderHero;
