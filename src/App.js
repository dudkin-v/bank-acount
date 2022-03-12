import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";
import { NavBar } from "./navigation";

import routes from "./utils/routes";

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
      <NavBar />
      <Routes>
        <Route exact path={routes.SIGN_IN} element={<SingIn />} />
        <Route exact path={routes.SIGN_UP} element={<SingUp />} />
      </Routes>
    </Container>
  );
};

export default App;
