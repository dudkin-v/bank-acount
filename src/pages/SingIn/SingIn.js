import styled from "styled-components";
import { useFormik } from "formik";

import { Link } from "react-router-dom";
import { InputField } from "../../components/InputField";
import { SubmitButton } from "../../components/SubmitButton";

const LoginBlock = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
const LoginLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 45%;
  background: rgb(162, 88, 107);
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
  background-color: #e8e3e3;
  width: 55%;
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 16px;
    color: gray;
    margin: 20px 0 40px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    .form-button {
      max-width: 200px;
    }
  }

  a {
    margin-top: 20px;
    font-size: 16px;
    color: blue;

    :hover {
      color: rgb(162, 88, 107);
    }
  }
`;

const formInitialValues = {
  email: "",
  password: "",
};

const SingIn = () => {
  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: (values) => console.log(values),
  });

  return (
    <LoginBlock>
      <LoginLogoBlock>
        <h1>Your Bank Account</h1>
      </LoginLogoBlock>
      <FormBlock>
        <h2>Welcome to Bank App</h2>
        <p>
          This is an Internet banking system that provides remote access to your
          accounts and makes it possible to carry out transactions via the
          Internet at any time from any computer or portable device.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <InputField
            type="text"
            label="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <InputField
            type="text"
            label="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="form-button">
            <SubmitButton type="submit" text="Sing in" />
          </div>
        </form>
        <Link to="/sing-up">Or create account.</Link>
      </FormBlock>
    </LoginBlock>
  );
};

export default SingIn;
