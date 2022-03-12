import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../../utils/colors";

const AuthorizationBlock = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 45%;
  background: ${colors.coralTree};
  background: linear-gradient(
    149deg,
    rgba(162, 88, 107, 1) 0%,
    rgba(40, 47, 91, 1) 50%,
    rgba(162, 88, 107, 1) 100%
  );

  h1 {
    color: white;
    font-size: 70px;
    text-align: center;
  }
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 80px;
  background-color: ${colors.ebb};
  width: 55%;
  h2 {
    font-size: 30px;
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
        color: gray;
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

      :hover {
        color: ${colors.coralTree};
      }
    }
  }
`;

const AuthorizationPage = ({ children }) => (
  <AuthorizationBlock>
    <LogoBlock>
      <h1>Your Bank Account</h1>
    </LogoBlock>
    <FormBlock>
      <h2>Welcome to Bank App</h2>
      <p className="app-description">
        This is an Internet banking system that provides remote access to your
        accounts and makes it possible to carry out transactions via the
        Internet at any time from any computer or portable device.
      </p>
      {children}
    </FormBlock>
  </AuthorizationBlock>
);

AuthorizationPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthorizationPage;
