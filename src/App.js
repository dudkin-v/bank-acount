import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import routes from "./utils/routes";
import colors from "./utils/colors";

import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";
import { NavBar } from "./navigation";
import { Overview } from "./pages/Overview";
import { Cards } from "./pages/Cards";
import { Payments } from "./pages/Payments";
import { MyStat } from "./pages/MyStat";
import { Account } from "./pages/Account";
import { Settings } from "./pages/Settings";
import { getLanguage } from "./store/settings/thunk";

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
  .page {
    position: relative;
    padding: 0 40px;
    width: 100%;
    .page-heading {
      font-size: 20px;
      padding: 40px 0 20px;
      color: ${colors.rhino};
    }
  }
`;

const PublicRoutes = () => (
  <Routes>
    <Route
      path="*"
      element={<Navigate replace to={routes.SIGN_IN} from="*" />}
    />
    <Route exact path={routes.SIGN_IN} element={<SingIn />} />
    <Route exact path={routes.SIGN_UP} element={<SingUp />} />
  </Routes>
);

const PrivateRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguage());
  }, []);

  return (
    <Main>
      <NavBar />
      <Routes>
        <Route
          path="*"
          element={<Navigate replace to={routes.OVERVIEW} from="*" />}
        />
        <Route exact path={routes.OVERVIEW} element={<Overview />} />
        <Route exact path={routes.CARDS} element={<Cards />} />
        <Route exact path={routes.PAYMENTS} element={<Payments />} />
        <Route exact path={routes.MY_STAT} element={<MyStat />} />
        <Route exact path={routes.ACCOUNT} element={<Account />} />
        <Route exact path={routes.SETTINGS} element={<Settings />} />
      </Routes>
    </Main>
  );
};

const App = () => {
  const token = useSelector((rootStore) => rootStore.login.token);
  const language = useSelector((rootStore) => rootStore.settings.language);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <Container>{token ? <PrivateRoutes /> : <PublicRoutes />}</Container>;
};

export default App;
