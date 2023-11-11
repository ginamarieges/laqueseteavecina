import DisplayStyled from "./DisplayStyled";

const Display = (): React.ReactElement => {
  return (
    <DisplayStyled>
      <p className="text">{`"Se viene tu mayor miedo, no busques donde esconderte porque no encontrarás"`}</p>
    </DisplayStyled>
  );
};

export default Display;
