import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";

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
  console.log("App");
  return (
    <Container>
      <Routes>
        <Route exact path="/sing-in" element={<SingIn />} />
        <Route exact path="/sing-up" element={<SingUp />} />
      </Routes>
    </Container>
  );
};

export default App;
