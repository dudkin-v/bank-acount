import PropTypes from "prop-types";
import styled from "styled-components";
import { useFormik } from "formik";

import { InputField } from "../InputField";
import { SubmitButton } from "../SubmitButton";

const LoginBlock = styled.section`
  display: flex;
  max-width: 1000px;
  width: 90vw;
  max-height: 600px;
  height: 90vh;
  background-color: #fff;
  box-shadow: 0 5px 15px 6px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
`;
const LoginLogoBlock = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  background: rgb(162, 88, 107);
  background: linear-gradient(
    149deg,
    rgba(162, 88, 107, 1) 0%,
    rgba(40, 47, 91, 1) 50%,
    rgba(162, 88, 107, 1) 100%
  );
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
`;
const LogoBlockHeading = styled.h1`
  color: white;
  font-size: 70px;
  text-align: center;
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 40px;
  background-color: #e8e3e3;
  width: 55%;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
`;
const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonSection = styled.div`
  max-width: 206px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const formInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const LoginForm = ({ onSubmitForm }) => {
  const formik = useFormik({
    initialValues: formInitialValues,
    onSubmit: onSubmitForm,
  });

  return (
    <LoginBlock>
      <LoginLogoBlock>
        <LogoBlockHeading>Your Bank Account</LogoBlockHeading>
      </LoginLogoBlock>
      <FormBlock>
        <Form onSubmit={formik.handleSubmit}>
          <FormSection>
            <InputField
              type="text"
              label="First Name"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <InputField
              type="text"
              label="Last Name"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </FormSection>
          <InputField
            type="text"
            label="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormSection>
            <InputField
              type="text"
              label="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <InputField
              type="text"
              label="Confirm password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
          </FormSection>
          <ButtonSection>
            <SubmitButton type="submit" text="Submit" />
          </ButtonSection>
        </Form>
      </FormBlock>
    </LoginBlock>
  );
};

LoginForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default LoginForm;
