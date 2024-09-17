import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import get from "lodash/fp/get";

import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";
import { Spinner } from "./pages/Settings/components/Spinner";
import { NavBar } from "./navigation";
import { Cards } from "./pages/Cards";
import { Payments } from "./pages/Payments";
import { MyStat } from "./pages/MyStat";
import { Account } from "./pages/Account";
import { Settings } from "./pages/Settings";
import { getAppData } from "./store/application/thunk";

import routes from "./utils/routes";
import colors from "./utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.ebb};
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
      color: ${colors.outerSpace};
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
  const cardId = useSelector(get("cards.cards.[0].id"));
  const appIsReady = useSelector((rootStore) => rootStore.application.isReady);

  useEffect(() => {
    dispatch(getAppData());
  }, []);

  return !appIsReady ? (
    <Spinner />
  ) : (
    <Main>
      <NavBar />
      <Routes>
        <Route
          path="*"
          element={
            <Navigate replace to={`${routes.CARD_HISTORY}${cardId}`} from="*" />
          }
        />
        <Route path={routes.TRANSACTION} element={<Cards />} />
        <Route path={routes.HISTORY} element={<Cards />} />
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
  const language = useSelector((rootStore) => rootStore.settings.lenguage);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <Container>{token ? <PrivateRoutes /> : <PublicRoutes />}</Container>;
};

export default App;
