import Countdown from "../Countdown/Countdown";
import Display from "../Display/Display";
import ContainerStyled from "../shared/ContainerStyled";

const App = (): JSX.Element => {
  return (
    <ContainerStyled>
      <Countdown />
      <Display />
    </ContainerStyled>
  );
};

export default App;
