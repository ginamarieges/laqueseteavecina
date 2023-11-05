import styled from "styled-components";

const CountdownStyled = styled.section`
  display: flex;
  gap: 50px;
  font-size: 3rem;
  justify-content: center;

  .digits {
    position: relative;
    display: inline-flex;
    flex-direction: column;

    &__top,
    &__bottom {
      height: 0.75em;
      line-height: 1;
      padding: 0.25em;
    }

    &__top {
      background-color: #f7f7f7;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      border-top-right-radius: 0.1em;
      border-top-left-radius: 0.1em;
    }

    &__bottom {
      background-color: white;
      display: flex;
      align-items: flex-end;
      border-bottom-right-radius: 0.1em;
      border-bottom-left-radius: 0.1em;
    }
  }

  .controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &__name {
      font-size: 1rem;
    }
  }
`;

export default CountdownStyled;
