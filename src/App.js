import styled from "styled-components";

import {SingIn} from "./pages/SingIn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e8e3e3;
  min-width: 100vw;
  min-height: 100vh;
`;

const App = () => {
  console.log("App")
  return (
    <Container>
      <SingIn />
    </Container>
  );
};

export default App;
