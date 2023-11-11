import styled from "styled-components";

const ContainerStyled = styled.div`
  margin: 0 auto;
  padding: 25px 20px;
  min-height: 100vh;
  background-color: #8d8a83;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  .title {
    text-transform: uppercase;
    font-size: 4.5rem;
    text-shadow: 1px 1px 2px black;
  }
`;

export default ContainerStyled;
