import styled from "styled-components";

const StyledTabs = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  margin: 2.5rem 3rem;

  color: #fff;
  border-radius: 2rem;

  ul.nav {
  }

  ul.nav li {
    padding: 1rem;
    /* list-style: none;
    text-align: center; */
    z-index: 9999;
    cursor: pointer;
    transition: all 0.3s;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
  }

  ul.nav li:nth-child(2) {
    border-radius: 0;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    margin-left: 1rem;
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
