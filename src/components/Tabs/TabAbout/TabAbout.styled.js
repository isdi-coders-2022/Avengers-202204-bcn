import styled from "styled-components";

const StyledTabAbout = styled.div`
  .TabAbout p {
    font-size: 2rem;
    text-align: center;
  }

  ul {
    padding: 0;
    display: flex;

    li {
      list-style: none;
    }
  }

  .creator-list {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;

    &__row {
      width: 100%;
      display: flex;

      justify-content: space-between;
    }

    &__row:last-child {
      margin-top: 2rem;
    }

    &__item {
      width: max-content;
      display: flex;
      flex-direction: column;

      &--bold {
        font-weight: 500;
        font-size: 1.3rem;
      }

      &--text {
        font-size: 1rem;
      }
    }
  }
`;

export default StyledTabAbout;
