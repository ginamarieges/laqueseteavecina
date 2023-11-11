import Countdown from "../Countdown/Countdown";
import Display from "../Display/Display";
import ContainerStyled from "../shared/ContainerStyled";

const App = (): JSX.Element => {
  return (
    <ContainerStyled>
      <h1 className="title">la que se te avecina</h1>
      <Countdown />
      <Display />
    </ContainerStyled>
  );
};

export default App;
