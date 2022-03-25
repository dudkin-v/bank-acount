import PropTypes from "prop-types";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import colors from "../../../utils/colors";
import { LanguagePicker } from "../../Settings/components/LanguagePicker";

const AuthorizationBlock = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 45%;
  background: ${colors.royalBlue};
  background: linear-gradient(
    146deg,
    rgba(94, 67, 230, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(94, 67, 230, 1) 100%
  );

  h1 {
    color: white;
    font-size: 70px;
    text-align: center;
  }
`;
const FormBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 80px;
  background-color: white;
  width: 55%;

  .switch-lang {
    position: absolute;
    top: 40px;
    right: 80px;
    .settings-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .settings-name {
        display: none;
      }
    }
  }
  h2 {
    font-size: 30px;
    color: ${colors.outerSpace};;
  }
  .app-description {
    font-size: 16px;
    color: ${colors.gray};
    margin: 20px 0 40px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    .input-section {
      display: flex;
      justify-content: space-between;
      label {
        width: 45%;
      }
    }

    .privacy-policy {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      p {
        font-size: 12px;
        color: ${colors.gray};
        padding: 0 10px;
      }
    }

    .form-button {
      max-width: 200px;
    }
  }

  .redirect-block {
    display: flex;
    margin-top: 20px;
    p {
      font-size: 16px;
      color: ${colors.gray};
    }
    a {
      padding: 0 8px;
      font-size: 16px;
      color: blue;
    }
  }
`;

const AuthorizationPage = ({ children }) => {
  const { t } = useTranslation();

  return (
    <AuthorizationBlock>
      <LogoBlock>
        <h1>Your Bank Account</h1>
      </LogoBlock>
      <FormBlock>
        <div className="switch-lang">
          <LanguagePicker />
        </div>
        <h2>{t("authorizationPage.title")}</h2>
        <p className="app-description">{t("authorizationPage.description")}</p>
        {children}
      </FormBlock>
    </AuthorizationBlock>
  );
};

AuthorizationPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthorizationPage;
