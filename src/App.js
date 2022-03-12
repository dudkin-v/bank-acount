import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";
import { NavBar } from "./navigation";

import routes from "./utils/routes";
import { Overview } from "./pages/Overview";
import { Cards } from "./pages/Cards";
import { Payments } from "./pages/Payments";
import { MyStat } from "./pages/MyStat";
import { Account } from "./pages/Account";
import { Settings } from "./pages/Settings";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e8e3e3;
  min-width: 100vw;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  padding: 40px 20px;
  width: 100vw;
  height: 100vh;
`;

const PublicRoutes = () => (
  <Routes>
    <Route exact path={routes.SIGN_IN} element={<SingIn />} />
    <Route exact path={routes.SIGN_UP} element={<SingUp />} />
  </Routes>
);

const PrivateRoutes = () => (
  <Main>
    <NavBar />
    <Routes>
      <Route exact path={routes.OVERVIEW} element={<Overview />} />
      <Route exact path={routes.CARDS} element={<Cards />} />
      <Route exact path={routes.PAYMENTS} element={<Payments />} />
      <Route exact path={routes.MY_STAT} element={<MyStat />} />
      <Route exact path={routes.ACCOUNT} element={<Account />} />
      <Route exact path={routes.SETTINGS} element={<Settings />} />
    </Routes>
  </Main>
);

const App = () => {
  console.log("App");
  const token = true;
  return <Container>{token ? <PrivateRoutes /> : <PublicRoutes />}</Container>;
};

export default App;
