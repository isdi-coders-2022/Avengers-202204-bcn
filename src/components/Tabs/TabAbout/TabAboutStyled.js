import styled from "styled-components";

const TabAboutStyled = styled.div`
  .TabAbout {
    &__content {
      font-size: 1.1rem;
    }
  }

  ul {
    padding: 0;
    display: flex;

    li {
      list-style: none;
    }
  }

  .creator-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-right: 2rem;

    &__row {
      width: max-content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__row:last-child {
      margin-right: 1rem;
    }

    &__item {
      width: max-content;
      display: flex;
      flex-direction: column;
      padding-bottom: 2rem;

      &--bold {
        font-weight: 500;
        font-size: 1.3rem;
      }

      &--text {
        font-size: 1.2rem;
      }
    }
  }
`;

export default TabAboutStyled;
