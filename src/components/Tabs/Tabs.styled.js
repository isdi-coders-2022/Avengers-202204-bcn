import styled from "styled-components";

const StyledTabs = styled.div`
  width: 100%;
  height: 10;
  min-height: 400px;
  margin-top: 7rem;
  margin-left: 3.2rem;
  margin-right: 3.2rem;
  margin-bottom: 4rem;
  z-index: 9999;
  color: #fff;
  border-radius: 2rem;

  ul.nav li {
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
  }

  ul.nav li:nth-child(2) {
    border-radius: 0;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    margin-left: 2rem;
  }

  ul.nav li:hover {
    color: rgba(50, 224, 196);
  }

  ul.nav li.active {
    color: #39a2db;
  }

  .outlet {
    margin-top: 1rem;
  }
`;

export default StyledTabs;
