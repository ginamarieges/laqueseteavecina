import styled from "styled-components";

const CountdownStyled = styled.section`
  display: flex;
  gap: 50px;
  font-size: 5rem;
  justify-content: center;

  .controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &__name {
      font-size: 1.6rem;
    }
  }

  .container-segment {
    display: flex;
    gap: 5px;
  }

  .flip-card {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  }

  .top,
  .bottom,
  .flip-card .top-flip,
  .flip-card .bottom-flip {
    height: 0.75em;
    line-height: 1;
    padding: 0.25em;
    overflow: hidden;
    width: 75px;
    display: flex;
    justify-content: center;
  }

  .top,
  .flip-card .top-flip {
    background-color: #f7f7f7;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-top-right-radius: 0.1em;
    border-top-left-radius: 0.1em;
  }

  .bottom,
  .flip-card .bottom-flip {
    background-color: white;
    display: flex;
    align-items: flex-end;
    border-bottom-right-radius: 0.1em;
    border-bottom-left-radius: 0.1em;
  }

  .flip-card .top-flip {
    position: absolute;
    width: 100%;
    background-color: red;
    animation: flip-top 250ms ease-in;
    transform-origin: bottom;
  }

  @keyframes flip-top {
    100% {
      transform: rotateX(90deg);
    }
  }

  .flip-card .bottom-flip {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: red;
    animation: flip-bottom 250ms ease-out 250ms;
    transform-origin: top;
    transform: rotateX(90deg);
  }

  @keyframes flip-bottom {
    100% {
      transform: rotateX(0deg);
    }
  }
`;

export default CountdownStyled;
