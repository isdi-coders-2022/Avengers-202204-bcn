import styled from "styled-components";

const StyledTabs = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  margin: 3.5rem auto 1.5rem;
  padding: 0 2.5rem;
  color: #fff;
  border-radius: 2rem;

  ul.nav {
    /* width: 60%; */
    /* margin: 0 auto 12rem; */
    /* display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #39a2db;
    border-radius: 2rem;
    padding-left: 0px; */
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
`;

export default StyledTabs;
